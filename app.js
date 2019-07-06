var data = [];
var counter = 0;

var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var age = document.getElementById("age");
var email = document.getElementById("email");
var insertButton = document.getElementById("insert-btn");
var lookupButton = document.getElementById("lookup-btn");

var Person = function(first, last, age, email, id) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.email = email;
    this.id = id;
};

var addToData = function() {
    var id = document.querySelector(".id-number");
    var success = document.getElementById("insert-success");
    var incomplete = document.getElementById("incomplete");
    
    if (firstName.value === "" || lastName.value === "" || age.value === ""         || email.value === "") {
        incomplete.classList.remove("display-none");
            } else {

                counter++;

                var user = new Person(firstName.value, lastName.value, age.value, email.value, counter);
                
                data.push(user);

                incomplete.classList.add("display-none");
                success.classList.remove("display-none");
                id.textContent = counter;
    }
    
    var deserializedObject = JSON.parse(localStorage.getItem(firstName.value));
    return deserializedObject;
};

insertButton.addEventListener("click", addToData);

lookupButton.addEventListener("click", function() {
    
    var lookupID = document.getElementById("lookup-id");
    var showID = document.querySelector(".show-id");
    var lookupResults = document.querySelector(".lookup-results");
    var collectionItems = document.getElementsByClassName("collection-item");
    var noMatch = document.getElementById("no-match");
    
    for (var i = 0; i < data.length; i++) {
        if (data[lookupID.value - 1] == data[i]) {
            showID.textContent = lookupID.value;
            lookupResults.classList.remove("display-none");
            
            noMatch.classList.add("display-none");

            collectionItems[0].textContent = data[lookupID.value - 1].first;
            collectionItems[1].textContent = data[lookupID.value - 1].last;
            collectionItems[2].textContent = data[lookupID.value - 1].age;
            collectionItems[3].textContent = data[lookupID.value - 1].email;
            
            } else {
                var collection = document.querySelector(".collection");
                
                collection.classList.add("display-none");
                noMatch.classList.remove("display-none");
        }
    }
});