var Person = function(personName) {
  this.name = personName;
  this.sayGreeting = function() {
    alert("Hello! I'm " + this.name + ". How are you?");
  }
}
