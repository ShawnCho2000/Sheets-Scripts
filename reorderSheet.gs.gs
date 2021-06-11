function sortGoogleSheets() {

  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1aUOMO8yrIkk3yVvKCxcKDOkEbo7czzuGauZYnRxWRoc/edit#gid=0");

  // Store all the worksheets in this array
  var sheetNameArray = [];
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    sheetNameArray.push(sheets[i].getName());
  }

  sheetNameArray.sort();

  // Reorder the sheets.
  for( var j = 0; j < sheets.length; j++ ) {
    ss.setActiveSheet(ss.getSheetByName(sheetNameArray[j]));
    ss.moveActiveSheet(j + 1);
  }
  ss.setActiveSheet(ss.getSheetByName("Template"));
  ss.moveActiveSheet(1);
}