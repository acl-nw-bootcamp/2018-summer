var Student = function(studentName, phone = "", email = "") {
  this.name = studentName;
  this.phone = phone;
  this.email = email;
  this.showInfo = function() {
    var message = "Hello! I'm " + this.name;
    message += "\nI can be reached at " + this.phone;
    message += "\nor by e-mail at: " + this.email;
    message += "\n\nI have " + lettersInName + " letters in my name.";
    alert(message);
  };
  var lettersInName = this.name.length;
  this.addToTable = function(table) {
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.innerText = this.name;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = this.phone;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = this.email;
    row.appendChild(cell);
    table.appendChild(row);
  }
}

var students = [];
students.push(new Student('John Doe', '503-555-1234', 'john.doe@school.edu'));
students.push(new Student('Jane Student', '503-555-9876', 'jane.student@school.edu'));
students.push(new Student('Jack Public', '503-555-5555', 'jackp1234@hotmail.com'));
students.push(new Student('Jill Citizen', '503-555-1010', 'jcitiz@gmail.com'));
students.push(new Student('James Bond', '503-555-0007', 'jbond@mi6.uk'));
students.push(new Student('Julie Boss', '503-555-1111', 'the.boss@work.com'));
students.push(new Student('Julio Learner', '503-555-2332', 'jl543@gmail.com'));


// function getUserName() {
//   return prompt("Hello. What is your name?");
// }
//
// function sayHello(name) {
//   alert("Hello, "+name);
// }
//
// var user = getUserName();
// sayHello(user);
//
// sayHello(getUserName());

var tableBodyReference = document.getElementById('roster').firstElementChild;
for (var index = 0; index < students.length; index++) {
  students[index].addToTable(tableBodyReference);
}


function addStudent() {
  var studentName = prompt("What is the student's name:");
  var studentPhone = prompt("What is the student's phone:");
  var studentEMail = prompt("What is the student's e-mail:");
  // length of array BEFORE adding student = 7
  // last index = length - 1 = 7 - 1 = 6
  students.push(new Student(studentName, studentPhone, studentEMail));
  // length of array AFTER adding student = 8
  // last index = length - 1 = 8 - 1 = 7
  students[students.length - 1].addToTable(tableBodyReference);
}
