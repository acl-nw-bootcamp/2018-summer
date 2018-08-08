// var student = {}
// student['name'] = "John Doe";
// student['sayHello'] = function() {
//   alert('Hello. My name is ' + student['name']);
// }
//
// var instructor = new Object();
// instructor.name = "Jane Expert";
// instructor.sayHello = function() {
//   alert('Hello. My name is ' + instructor.name);
// }


var student1 = {
  name: 'John Doe',
  phone: '503-555-1234',
  sayHello: function() {
    alert('Hello. My name is ' + student1.name + '.');
  },
  toHTML: function() {
    return '<li>' + student1.name + ' - Contact: ' + student1.phone + '</li>';
  }
}

var student2 = {
  name: 'Jane Citizen',
  phone: '503-555-9876',
  sayHello: function() {
    alert('Hello. My name is ' + student2.name + '.');
  },
  toHTML: function() {
    return '<li>' + student2.name + ' - Contact: ' + student2.phone + '</li>';
  }
}

var student3 = {
  name: 'James Bond',
  phone: '503-555-5555',
  sayHello: function() {
    alert('Hello. My name is ' + student3.name + '.');
  },
  toHTML: function() {
    return '<li>' + student3.name + ' - Contact: ' + student3.phone + '</li>';
  }
}

var student4 = {
  name: 'Jill Student',
  phone: '503-555-9911',
  sayHello: function() {
    alert('Hello. My name is ' + student4.name + '.');
  },
  toHTML: function() {
    return '<li>' + student4.name + ' - Contact: ' + student4.phone + '</li>';
  }
}

var instructor = {
  name: 'Jane Expert',
  sayHello: function() {
    alert('Hello. My name is ' + instructor.name + '.');
  }
}

var students = [
  student1,
  student2,
  student3,
  student4,
]

function buildList() {
  var list = document.getElementById('student-listing');
  for (var index = 0; index < students.length; index++) {
    var student = students[index]; // current student
    list.innerHTML += student.toHTML();
  }
}

buildList();
