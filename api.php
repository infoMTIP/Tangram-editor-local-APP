<?php
// Tangram Studio – Copyright (c) 2026 vancode.io – MIT License, see LICENSE
// Tangram Studio – ukládání dat vedle aplikace (WAMP / jakýkoli PHP server)
// Přejmenuj na api.php a dej do stejné složky jako index.html
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$file   = __DIR__ . '/tangram-data.json';
$backup = __DIR__ . '/tangram-data.bak.json';
$action = $_GET['action'] ?? '';

function out($data, $code = 200) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($action === 'load') {
    if (!file_exists($file)) out(['ok' => true, 'data' => null]);
    $data = json_decode(file_get_contents($file), true);
    if (!is_array($data)) out(['ok' => false, 'error' => 'tangram-data.json je poškozený'], 500);
    out(['ok' => true, 'data' => $data]);
}

if ($action === 'save' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!is_array($data) || !isset($data['shapes']) || !is_array($data['shapes'])) {
        out(['ok' => false, 'error' => 'neplatná data'], 400);
    }
    // záloha předchozí verze
    if (file_exists($file)) @copy($file, $backup);
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $ok = file_put_contents($file, $json, LOCK_EX);
    if ($ok === false) out(['ok' => false, 'error' => 'nelze zapsat do složky'], 500);
    out(['ok' => true]);
}

out(['ok' => false, 'error' => 'neznámá akce'], 400);