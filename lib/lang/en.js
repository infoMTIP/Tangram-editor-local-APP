// Tangram Studio – English
window.TANGRAM_LANGS = window.TANGRAM_LANGS || {};
window.TANGRAM_LANGS.en = {
  _name: 'English',
  _locale: 'en-GB',
  _plural: n => n === 1 ? 0 : 1,

  'tab.gallery': 'Gallery', 'tab.tangram': 'Tangram',   'tab.print': 'Print',
  'lang.switch': 'Language',

  'store.server': 'Saving to tangram-data.json', 'store.saving': 'Saving…', 'store.error': 'Save error: {msg}',
  'export.dirty': 'Export JSON', 'export.done': 'Exported {time}', 'export.none': 'Browser only',
  'export.tipDirty': 'You have changes stored only in the browser. Export them to a JSON file.',
  'export.tipDone': 'Your latest changes are exported to a file.',
  'export.tipNone': 'Data lives only in the browser so far, nothing new to export.',

  'status.new': 'Not saved yet', 'status.dirty': 'Unsaved changes', 'status.saved': 'Saved {time}',
  'doc.newName': 'New shape', 'doc.untitled': 'Untitled',
  'seed.square': 'Basic square', 'seed.categories': ['Animals', 'People', 'Objects', 'Geometry'],

  'common.cancel': 'Cancel', 'common.close': 'Close', 'common.undo': 'Undo (Ctrl+Z)', 'common.redo': 'Redo (Ctrl+Y)',
  'cat.all': 'All categories', 'cat.none': 'No category', 'cat.newPh': 'New category', 'cat.add': 'Add', 'cat.addBtn': 'Category',
  'view.silhouette': 'Silhouette', 'view.color': 'Colour',

  'gal.new': 'New shape', 'gal.search': 'Search by name', 'gal.sort': 'Sorting',
  'gal.sortUpdated': 'Recently edited', 'gal.sortName': 'By name', 'gal.sortCreated': 'Oldest first',
  'gal.import': 'Import', 'gal.export': 'Export', 'gal.editAria': 'Edit {name}', 'gal.edit': 'Edit',
   'gal.duplicate': 'Duplicate', 'gal.printAdd': 'Add to print',
  'gal.printRemove': 'Remove from print', 'gal.delete': 'Delete', 'gal.copyName': '{name} (copy)',
  'gal.emptyFilter': 'No shape matches the filter. Try another name or category.',

  'ed.new': 'New', 'ed.name': 'Name', 'ed.namePh': 'Shape name', 'ed.category': 'Category', 'ed.save': 'Save',

  'set.shape': 'Shape', 'set.center': 'Centre on origin',
  'set.centerHint': 'Moves the whole shape as one group so that its centre sits at the origin of the axes.',
  'k.cD': 'centre the shape',
  'set.rotation': 'Rotation', 'set.rotStep': 'Rotation step', 'set.display': 'Display', 'set.mono': 'Monochrome',
  'set.borders': 'Piece borders', 'set.grid': 'Grid', 'set.axes': 'Axes and origin', 'set.snapping': 'Snapping',
  'set.snap': 'Snap pieces together', 'set.gap': 'Gap between pieces', 'set.snapRange': 'Snap distance',
  'set.gapHint': 'The full assembled square is 200 units wide, so a gap of 4 is 2 % of its side.',
  'set.controls': 'Controls', 'set.sessionHint': 'Settings in this column last until you reload the page.',

  'k.drag': 'Drag a piece', 'k.dragD': 'move', 'k.click': 'Click', 'k.clickLower': 'click', 'k.clickD': 'rotate right',
  'k.leftD': 'rotate left', 'k.right': 'Right button', 'k.qeD': 'rotate selected piece', 'k.fD': 'mirror the parallelogram',
  'k.arrows': 'Arrows', 'k.arrowsD': 'move by 1 (with Shift by 10)', 'k.wheel': 'Mouse wheel', 'k.wheelD': 'zoom to cursor',
  'k.pan': 'Drag background', 'k.panD': 'pan the view', 'k.zoomKeysD': 'reset zoom / show all', 'k.saveD': 'save',

  'hud.zoomIn': 'Zoom in', 'hud.zoomOut': 'Zoom out', 'hud.reset': 'Reset zoom (0)', 'hud.fit': 'Show all (Home)',

  'rp.preview': 'Preview', 'rp.task': 'Puzzle', 'rp.solution': 'Solution', 'rp.size': 'Size', 'rp.state': 'Status',
  'rp.scatter': 'Scatter pieces', 'rp.square': 'Assemble square', 'rp.pieces': 'Pieces', 'rp.rotation': 'Rotation (°)',
  'rp.fine': 'Fine step', 'rp.flip': 'Mirror', 'rp.json': 'Saved data (JSON)',
  'rp.hint': 'Pick a piece in the list or grab it in the editor, then fine-tune its position and rotation here.',

  'piece.bigA': 'Large triangle A', 'piece.bigB': 'Large triangle B', 'piece.mid': 'Medium triangle',
  'piece.smallA': 'Small triangle A', 'piece.smallB': 'Small triangle B', 'piece.square': 'Square', 'piece.para': 'Parallelogram',

  'gen.style': 'Style', 'gen.compact': 'Compact', 'gen.mixed': 'Balanced', 'gen.sprawl': 'Sprawling', 'gen.reroll': 'Another shape',
  'gen.button': 'Generator', 'gen.title': 'Shape generator', 'gen.regenerate': 'Generate again', 'gen.use': 'To editor',
  'gen.hint': 'Random shapes from all 7 pieces, touching edge to edge without overlapping. Pick one that reminds you of something, then fine-tune and save it in the editor.',

  'pr.cards': 'Box cards', 'pr.pages': 'Free pages', 'pr.content': 'Content', 'pr.task': 'Puzzle (silhouette)',
  'pr.solution': 'Solution', 'pr.both': 'Puzzle and solution', 'pr.perCard': 'Per card', 'pr.one': '1 shape (1×1)',
  'pr.four': '4 shapes (2×2)', 'pr.perPage': 'Per page', 'pr.size': 'Size', 'pr.fit': 'Fit',
  'pr.real': 'Real size 1:1', 'pr.side': 'Set size', 'pr.name': 'Name', 'pr.category': 'Category',
  'pr.crop': 'Crop marks', 'pr.outline': 'Card outline', 'pr.number': 'Card number', 'pr.duplex': 'Double-sided',
  'pr.frame': 'Frame', 'pr.colorSol': 'Coloured solution', 'pr.print': 'Print / PDF', 'pr.shapes': 'Shapes to print',
  'pr.selectShown': 'Select shown', 'pr.clear': 'Clear selection', 'pr.selected': 'Selected: {n}',
  'pr.emptyCat': 'Nothing in this category yet.', 'pr.empty': 'Tick the shapes you want to print on the left.',
  'pr.cardHint': 'A card is {w} × {h} mm and 6 cards fit on A4. Each shape is scaled up to fill its space on the card.',
  'pr.duplexHint': 'Print double-sided, flipping on the long edge, and each solution lands exactly on the back of its card.',
  'pr.realHint': 'Set size is the edge length of your physical set\'s fully assembled square. In 1:1 mode the real pieces fit the printed silhouette exactly.',
  'pr.solSuffix': ' (solution)', 'pr.solLabel': 'Solution', 'pr.shrunk': 'Scaled down, does not fit at 1:1',
  'pr.pageOf': 'Page {i} of {n}',
  'pages': ['{n} page', '{n} pages'],
  'shapes': ['{n} shape', '{n} shapes'],

  'dlg.unsavedTitle': 'Unsaved changes', 'dlg.unsavedText': 'The current shape has unsaved changes. If you continue, they will be lost.',
  'dlg.discard': 'Discard changes', 'dlg.deleteTitle': 'Delete shape',
  'dlg.deleteText': 'The shape “{name}” will be removed from the gallery. This cannot be undone.', 'dlg.delete': 'Delete',

  'exp.title': 'Export shapes', 'exp.text': '{count} in JSON format. You can load the file later via Import.',
  'exp.copy': 'Copy', 'exp.download': 'Download file',
  'imp.title': 'Import shapes', 'imp.text': 'Choose a JSON file or paste its content here.',
  'imp.replace': 'Replace the current database', 'imp.replaceNote': 'The current {count} will be deleted and replaced by the file content.',
  'imp.append': 'Add to existing shapes', 'imp.do': 'Import', 'imp.doReplace': 'Replace database',
  'imp.errJson': 'The text is not valid JSON. Check that the whole file content is pasted.',
  'imp.errEmpty': 'No shapes found in the data. Expecting an object with a “shapes” array.',

  'toast.savedServer': 'Saved to tangram-data.json: {name}', 'toast.savedLocal': 'Saved in the browser: {name}',
  'toast.saveFail': 'Saving failed. Back up your shapes with Export.', 'toast.catReady': 'Category “{name}” is ready',
  'toast.copyMade': 'Created a copy of {name}', 'toast.deleted': 'Shape deleted',
  'toast.dlFail': 'Download failed. Select the text and copy it manually.',
  'toast.clipNA': 'Clipboard is not available. Select the text and copy it manually.', 'toast.copied': 'Copied to clipboard',
  'toast.clipBlocked': 'Clipboard is blocked. Select the text and copy it manually.',
  'toast.imported': 'Imported: {count}', 'toast.replaced': 'Database replaced: {count}',
  'toast.printFail': 'Could not start printing.',
};