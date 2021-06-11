function addNote(date) {
  var db = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1aUOMO8yrIkk3yVvKCxcKDOkEbo7czzuGauZYnRxWRoc/edit#gid=0"); //main database
  //var db = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1jmyGXoJyEQ-E_-T1q-wa76hLC_aaf2PmWeWQHfcsqsE/edit#gid=1042571060"); //tester
  var noteSheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1P8Bk3d7lGObzryoca_sJYU0G8VBSxibYqg01r-Af8qs/edit#gid=0"); //main recordbook
  // let d = new Date();
  // // let date = d.getMonth() + 1 + "/" + d.getDate();
  //let date = "4/5";
  notesPage = noteSheet.getSheetByName(date);
  if (notesPage == null) {
    return null;
  }
  console.log(date);
  let notes = notesPage.getDataRange().getValues();

  let nameSheets = db.getSheets();
  let names = [];
  nameSheets.forEach(name => names.push(name.getSheetName())); 
  for (let i = 1; i < notes.length; i++) {
    try {
      let studentName = notes[i][1];
      studentName = studentName.trim();
      if (studentName != "" && names.indexOf(studentName) === -1) {
        // names = sortInsert(names, studentName);
        names.push(studentName);
        db.insertSheet(studentName, 2, {template: db.getSheetByName("Template")});
      }
      let studentDB = db.getSheetByName(studentName);
      console.log(studentName);
      if(notes[i][4] != "" || notes[i][5] != "" || notes[i][6] != "" || notes[i][7] != "" || notes[i][8] != "" || notes[i][9] != "" || notes[i][10] != "" || notes[i][3] != "") { //got lazy just checks if any of the note row is not empty, couldve just checked as a whole
        prependRow(studentDB, notes[i], date);
        studentDB.getRange("K2")
          .setBackground(notesPage.getRange("K" + (i + 1)).getBackground());
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function prependRow(sheet, rowData, date) {
  console.log(rowData);
  sheet.insertRowBefore(2).getRange(2, 1, 1, rowData.length).setValues([rowData]);
  sheet.getRange("A2").setValue(date);
}

// function sortInsert(name, newName) {
//   let i = 1;
//   let found = (i >= name.length);
//   while (!found) {
//     if (name[i].localeCompare(newName) > 0) {
//       name.splice(i, 0, newName);
//       found = true;
//       return name;
//     } else {  
//       i++;
//       found = (i >= name.length);
//     }
//   }
//   name.push(newName);
//   return name;
// }
