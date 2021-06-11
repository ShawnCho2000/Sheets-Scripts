function onEdit(event){
  var sheet = event.source.getActiveSheet();
  var editedCell = sheet.getActiveCell();

  if (sheet.getSheetName() === "Schedule") {
    var columnToSortBy = 3;
    var tableRange = "A2:C" + sheet.getLastRow();

    if(editedCell.getColumn() == columnToSortBy){   
      var range = sheet.getRange(tableRange);
      range.sort( { column : columnToSortBy } );
    }
  }
}