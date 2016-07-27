var Person = function(firstAndLast) {
  var firstName, lastName, fullName;
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + " " + lastName;
  };
  this.setLastName = function (last) {
    lastName = last;
    fullName = firstName + " " + last;
  };
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    var nameArr = firstAndLast.split(' ');
    firstName = nameArr[0];
    lastName = nameArr[1];
  };
  this.setFullName(firstAndLast);
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
console.log(bob.getFullName());
console.log(bob.getFirstName());

/*
Make a Person

Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/
