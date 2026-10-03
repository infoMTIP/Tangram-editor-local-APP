# Tangram Studio

🇨🇿 [Česky](#česky) · 🇬🇧 [English](#english)

---

## Česky

Lokální webová aplikace pro skládání, hraní a tisk tangramových obrazců. Běží v prohlížeči, nepotřebuje internet ani instalaci.

### Funkce
- **Galerie** – přehled obrazců, hledání, kategorie, import a export JSON.
- **Tangram** – editor: tažení dílů, klik = otočení (Ctrl + klik opačně), přichytávání, zoom, osy. Tlačítko Generátor nabídne 6 náhodných tvarů ze všech 7 dílků k dotvoření v editoru.
- **Tisk** – karty 98 × 94,5 mm (6 na A4, ořezové značky, oboustranný tisk řešení) nebo volné stránky A4.
- Čeština a angličtina, další jazyky lze přidat.

### Spuštění
- **Bez serveru:** otevři `index.html` v prohlížeči. Data se ukládají do prohlížeče; kontrolka vpravo nahoře upozorní, když je čas exportovat JSON.
- **S PHP serverem (např. WAMP):** zkopíruj složku do `www` a otevři přes `http://localhost/...`. Aplikace pak ukládá automaticky do `tangram-data.json` vedle sebe (záloha v `tangram-data.bak.json`).

### Struktura
```
index.html            aplikace
api.php               ukládání na PHP serveru (volitelné)
tangram-data.json     databáze obrazců (vznikne sama)
lib/vue.global.prod.js
lib/sora.css          font Sora vložený jako base64
lib/lang/cs.js        čeština
lib/lang/en.js        angličtina
```

### Nový jazyk
Zkopíruj `lib/lang/en.js` třeba jako `de.js`, přepiš klíč `window.TANGRAM_LANGS.en` na `de`, přelož texty a přidej do `index.html` řádek `<script src="lib/lang/de.js"></script>`.

---

## English

A local web app for building, playing and printing tangram shapes. Runs in the browser, no internet or installation required.

### Features
- **Gallery** – browse shapes, search, categories, JSON import and export.
- **Tangram** – editor: drag pieces, click to rotate (Ctrl + click the other way), snapping, zoom, axes. The Generator button offers 6 random shapes from all 7 pieces to finish in the editor.
- **Print** – 98 × 94.5 mm cards (6 per A4, crop marks, double-sided solutions) or free A4 pages.
- Czech and English, more languages can be added.

### Running
- **Without a server:** open `index.html` in a browser. Data is stored in the browser; the indicator in the top right tells you when to export JSON.
- **With a PHP server (e.g. WAMP):** copy the folder into `www` and open it via `http://localhost/...`. The app then saves automatically to `tangram-data.json` next to itself (backup in `tangram-data.bak.json`).

### Adding a language
Copy `lib/lang/en.js`, e.g. to `de.js`, change the key `window.TANGRAM_LANGS.en` to `de`, translate the texts and add `<script src="lib/lang/de.js"></script>` to `index.html`.

---

### Licence / License
Tangram Studio © 2026 vancode.io, [MIT License](LICENSE).

### Third-party / Licence třetích stran
- [Vue.js](https://vuejs.org) 3.4.21 – MIT License
- [Sora](https://fonts.google.com/specimen/Sora) font – SIL Open Font License 1.1