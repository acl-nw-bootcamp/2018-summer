var Student = function(studentName, studentImage) {
  this.name = studentName;
  this.image = studentImage;
  this.github = "";
}

Student.prototype.toListItem = function() {
  var listItem = document.createElement('li');
  listItem.innerText = this.name;
  listItem.addEventListener('click', showStudentDetails);
  return listItem;
}

var students = [];
students.push(new Student("Elizabeth Clarkson", "Elizabeth.jpg"));
students.push(new Student("Johnny Cruz", "Johnny.jpg"));
students.push(new Student("Kate Dameron", "Kate.jpg"));
students.push(new Student("Ido Moskovits", "Ido.jpg"));
students.push(new Student("Zachary Tahsuda", "Zachary.jpg"));
students.push(new Student("Jon Washington", "Jon.jpg"));

function buildStudentList() {
  var studentList = document.getElementById('student-list');
  for (var index = 0; index < students.length; index++) {
    studentList.appendChild(students[index].toListItem());
  }
}

function showStudentDetails(event) {
  var studentNameContainer = document.getElementById('student-name');
  studentNameContainer.innerText = event.target.innerText;
}

window.addEventListener('load', buildStudentList);
