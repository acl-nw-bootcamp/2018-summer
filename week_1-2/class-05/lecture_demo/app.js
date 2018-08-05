var students = new Array();
students[0] = "John Doe";
students[1] = "Jane Student";
students[2] = "Jack Public";
students[3] = "Jill Citizen";
students[4] = "James Bond";

var emails = [
  "john.doe@home.com",
  "janec@school.edu",
  "jackpub@where.com",
  "jill.citizen@gmail.com",
  "james.bond@mi6.uk"
]

// for (var index = 0; index < students.length; index++) {
//   alert("Student #"+index+": "+students[index]);
// }

function getStudentTable() {
  var studentTable = "<table>";
  studentTable += "<tr><th>Student</th><th>E-Mail</th></tr>";
  for (var index = 0; index < students.length; index++) {
    studentTable += "<tr><td>"+students[index]+"</td>";
    studentTable += "<td>"+emails[index]+"</td></tr>";
  }
  studentTable += "</table>"
  return studentTable;
}
