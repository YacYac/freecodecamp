var Person = function(firstAndLast) {
  var nameArr = firstAndLast.split(' ');
  console.log(nameArr);
  var firstName;
  var lastName;
  var fullName = firstAndLast;

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

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
