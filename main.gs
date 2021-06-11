function RunDaily() {
  let d = new Date();
  d.setHours(d.getHours() - 20);
  let date = d.getMonth() + 1 + "/" + d.getDate();
  console.log(date);
  addNote(date);
}
