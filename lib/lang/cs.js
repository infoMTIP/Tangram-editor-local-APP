// Tangram Studio – čeština
// Nový jazyk: zkopíruj tento soubor (např. de.js), přelož hodnoty a přidej <script src="lib/lang/de.js"> do index.html.
window.TANGRAM_LANGS = window.TANGRAM_LANGS || {};
window.TANGRAM_LANGS.cs = {
  _name: 'Čeština',
  _locale: 'cs-CZ',
  _plural: n => n === 1 ? 0 : (n >= 2 && n <= 4 ? 1 : 2),

  'tab.gallery': 'Galerie', 'tab.tangram': 'Tangram',   'tab.print': 'Tisk',
  'lang.switch': 'Jazyk',

  'store.server': 'Ukládá se do tangram-data.json', 'store.saving': 'Ukládám…', 'store.error': 'Chyba ukládání: {msg}',
  'export.dirty': 'Exportovat JSON', 'export.done': 'Exportováno {time}', 'export.none': 'Jen v prohlížeči',
  'export.tipDirty': 'Máš změny, které jsou jen v prohlížeči. Exportuj je do JSON souboru.',
  'export.tipDone': 'Poslední změny jsou exportované do souboru.',
  'export.tipNone': 'Data jsou zatím jen v prohlížeči, nic nového k exportu.',

  'status.new': 'Zatím neuloženo', 'status.dirty': 'Neuložené změny', 'status.saved': 'Uloženo {time}',
  'doc.newName': 'Nový obrazec', 'doc.untitled': 'Bez názvu',
  'seed.square': 'Základní čtverec', 'seed.categories': ['Zvířata', 'Lidé', 'Předměty', 'Geometrie'],

  'common.cancel': 'Zrušit', 'common.close': 'Zavřít', 'common.undo': 'Zpět (Ctrl+Z)', 'common.redo': 'Znovu (Ctrl+Y)',
  'cat.all': 'Všechny kategorie', 'cat.none': 'Bez kategorie', 'cat.newPh': 'Nová kategorie', 'cat.add': 'Přidat', 'cat.addBtn': 'Kategorie',
  'view.silhouette': 'Silueta', 'view.color': 'Barevně',

  'gal.new': 'Nový obrazec', 'gal.search': 'Hledat podle názvu', 'gal.sort': 'Řazení',
  'gal.sortUpdated': 'Naposledy upravené', 'gal.sortName': 'Podle názvu', 'gal.sortCreated': 'Od nejstarších',
  'gal.import': 'Import', 'gal.export': 'Export', 'gal.editAria': 'Upravit {name}', 'gal.edit': 'Upravit',
   'gal.duplicate': 'Duplikovat', 'gal.printAdd': 'Přidat k tisku',
  'gal.printRemove': 'Odebrat z tisku', 'gal.delete': 'Smazat', 'gal.copyName': '{name} (kopie)',
  'gal.emptyFilter': 'Filtru neodpovídá žádný obrazec. Zkus jiný název nebo kategorii.',

  'ed.new': 'Nový', 'ed.name': 'Název', 'ed.namePh': 'Název obrazce', 'ed.category': 'Kategorie', 'ed.save': 'Uložit',

  'set.shape': 'Obrazec', 'set.center': 'Vycentrovat na střed',
  'set.centerHint': 'Posune celý obrazec jako jeden celek tak, aby jeho střed ležel v počátku os.',
  'k.cD': 'vycentrovat obrazec',
  'set.rotation': 'Otáčení', 'set.rotStep': 'Krok otáčení', 'set.display': 'Zobrazení', 'set.mono': 'Monotónně',
  'set.borders': 'Hranice dílů', 'set.grid': 'Mřížka', 'set.axes': 'Osy a střed', 'set.snapping': 'Přichytávání',
  'set.snap': 'Přichytávat díly k sobě', 'set.gap': 'Mezera mezi díly', 'set.snapRange': 'Dosah přichycení',
  'set.gapHint': 'Celý složený čtverec má stranu 200 jednotek. Mezera 4 je tedy 2 % strany.',
  'set.controls': 'Ovládání', 'set.sessionHint': 'Nastavení v tomhle sloupci platí, dokud neobnovíš stránku.',

  'k.drag': 'Tažení dílu', 'k.dragD': 'přesun', 'k.click': 'Klik', 'k.clickLower': 'klik', 'k.clickD': 'otočení doprava',
  'k.leftD': 'otočení doleva', 'k.right': 'Pravé tlačítko', 'k.qeD': 'otočení vybraného dílu', 'k.fD': 'zrcadlit rovnoběžník',
  'k.arrows': 'Šipky', 'k.arrowsD': 'posun o 1 (se Shift o 10)', 'k.wheel': 'Kolečko', 'k.wheelD': 'zoom ke kurzoru',
  'k.pan': 'Tažení plochy', 'k.panD': 'posun pohledu', 'k.zoomKeysD': 'reset zoomu / zobrazit vše', 'k.saveD': 'uložit',

  'hud.zoomIn': 'Přiblížit', 'hud.zoomOut': 'Oddálit', 'hud.reset': 'Resetovat zoom (0)', 'hud.fit': 'Zobrazit vše (Home)',

  'rp.preview': 'Náhled', 'rp.task': 'Úloha', 'rp.solution': 'Řešení', 'rp.size': 'Rozměr', 'rp.state': 'Stav',
  'rp.scatter': 'Rozložit díly', 'rp.square': 'Složit čtverec', 'rp.pieces': 'Díly', 'rp.rotation': 'Natočení (°)',
  'rp.fine': 'Jemný krok', 'rp.flip': 'Zrcadlit', 'rp.json': 'Uložená data (JSON)',
  'rp.hint': 'Díl vyber v seznamu nebo ho chyť v editoru. Pak mu tady doladíš polohu a natočení.',

  'piece.bigA': 'Velký trojúhelník A', 'piece.bigB': 'Velký trojúhelník B', 'piece.mid': 'Střední trojúhelník',
  'piece.smallA': 'Malý trojúhelník A', 'piece.smallB': 'Malý trojúhelník B', 'piece.square': 'Čtverec', 'piece.para': 'Rovnoběžník',

  'gen.style': 'Styl', 'gen.compact': 'Kompaktní', 'gen.mixed': 'Vyvážený', 'gen.sprawl': 'Rozvětvený', 'gen.reroll': 'Jiný tvar',
  'gen.button': 'Generátor', 'gen.title': 'Generátor tvarů', 'gen.regenerate': 'Vygenerovat znovu', 'gen.use': 'Do editoru',
  'gen.hint': 'Náhodné tvary ze všech 7 dílků, které se dotýkají hranou a nepřekrývají se. Vyber tvar, který ti něco připomíná, a v editoru ho dolaď a ulož.',

  'pr.cards': 'Karty do krabičky', 'pr.pages': 'Volné stránky', 'pr.content': 'Obsah', 'pr.task': 'Úloha (silueta)',
  'pr.solution': 'Řešení', 'pr.both': 'Úloha i řešení', 'pr.perCard': 'Na kartu', 'pr.one': '1 obrazec (1×1)',
  'pr.four': '4 obrazce (2×2)', 'pr.perPage': 'Na stránku', 'pr.size': 'Velikost', 'pr.fit': 'Přizpůsobit',
  'pr.real': 'Skutečná 1:1', 'pr.side': 'Strana sady', 'pr.name': 'Název', 'pr.category': 'Kategorie',
  'pr.crop': 'Ořezové značky', 'pr.outline': 'Obrys karty', 'pr.number': 'Číslo karty', 'pr.duplex': 'Oboustranně',
  'pr.frame': 'Rámeček', 'pr.colorSol': 'Barevné řešení', 'pr.print': 'Tisk / PDF', 'pr.shapes': 'Obrazce k tisku',
  'pr.selectShown': 'Vybrat zobrazené', 'pr.clear': 'Zrušit výběr', 'pr.selected': 'Vybráno: {n}',
  'pr.emptyCat': 'V téhle kategorii zatím nic není.', 'pr.empty': 'Vlevo zaškrtni obrazce, které chceš vytisknout.',
  'pr.cardHint': 'Karta má {w} × {h} mm, na A4 se vejde 6 karet. Každý obrazec se zvětší na maximum svého místa v kartě.',
  'pr.duplexHint': 'Tiskni oboustranně s otáčením podle delší strany, řešení pak vyjde přesně na zadní stranu své karty.',
  'pr.realHint': 'Strana sady je délka hrany celého složeného čtverce tvé fyzické sady. V režimu 1:1 pak skutečné dílky přesně sedí na vytištěnou siluetu.',
  'pr.solSuffix': ' (řešení)', 'pr.solLabel': 'Řešení', 'pr.shrunk': 'Zmenšeno, v měřítku 1:1 se nevejde',
  'pr.pageOf': 'Strana {i} z {n}',
  'pages': ['{n} strana', '{n} strany', '{n} stran'],
  'shapes': ['{n} obrazec', '{n} obrazce', '{n} obrazců'],

  'dlg.unsavedTitle': 'Neuložené změny', 'dlg.unsavedText': 'Rozpracovaný obrazec má neuložené změny. Když budeš pokračovat, přijdeš o ně.',
  'dlg.discard': 'Zahodit změny', 'dlg.deleteTitle': 'Smazat obrazec',
  'dlg.deleteText': 'Obrazec „{name}“ se smaže z galerie. Tohle nejde vrátit.', 'dlg.delete': 'Smazat',

  'exp.title': 'Export obrazců', 'exp.text': '{count} ve formátu JSON. Soubor později načteš přes Import.',
  'exp.copy': 'Kopírovat', 'exp.download': 'Stáhnout soubor',
  'imp.title': 'Import obrazců', 'imp.text': 'Vyber soubor JSON, nebo sem vlož jeho obsah.',
  'imp.replace': 'Nahradit současnou databázi', 'imp.replaceNote': 'Současných {count} se smaže a nahradí obsahem souboru.',
  'imp.append': 'Přidat k existujícím obrazcům', 'imp.do': 'Importovat', 'imp.doReplace': 'Nahradit databázi',
  'imp.errJson': 'Text není platný JSON. Zkontroluj, že je vložený celý obsah souboru.',
  'imp.errEmpty': 'V datech nejsou žádné obrazce. Očekávám objekt s polem „shapes“.',

  'toast.savedServer': 'Uloženo do tangram-data.json: {name}', 'toast.savedLocal': 'Uloženo v prohlížeči: {name}',
  'toast.saveFail': 'Uložení selhalo. Zálohuj obrazce přes Export.', 'toast.catReady': 'Kategorie „{name}“ je připravená',
  'toast.copyMade': 'Vytvořena kopie obrazce {name}', 'toast.deleted': 'Obrazec smazán',
  'toast.dlFail': 'Stažení se nepovedlo. Označ text a zkopíruj ho ručně.',
  'toast.clipNA': 'Schránka není dostupná. Označ text a zkopíruj ho ručně.', 'toast.copied': 'Zkopírováno do schránky',
  'toast.clipBlocked': 'Schránka je zablokovaná. Označ text a zkopíruj ho ručně.',
  'toast.imported': 'Importováno: {count}', 'toast.replaced': 'Databáze nahrazena: {count}',
  'toast.printFail': 'Tisk se nepodařilo spustit.',
};