var Student = function(userName) {
  this.name = userName;
}

Student.prototype.sayGreeting = function() {
  alert('Hello. I\'m ' + this.name + '. Pleased to meet you.');
}

// var johnDoe = new Student('John Doe');
// var johnDoe = {
//   this.name = userName;
// }
//
// var janeStudent = {
//   this.name = userName;
// }
