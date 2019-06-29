var counter = 0;

var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var age = document.getElementById("age");
var email = document.getElementById("email");
var insertButton = document.getElementById("insert-btn");

var Person = function(first, last, age, email, id) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.email = email;
    this.id = id;
};

insertButton.addEventListener("click", function() {
    
    counter++;
    
    var user = new Person(firstName.value, lastName.value, age.value, email.value, counter);
    
    var serializedObject = JSON.stringify(user);
    localStorage.setItem(firstName.value, serializedObject);
});