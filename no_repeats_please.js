function findPerms(str) {
  var perms = [];
  function recPerm(rest, soFar) {
    var next = [];
    var remaining;

    if (rest === '') {
      perms.push(soFar);
    } else {
      for (var i = 0; i < rest.length; i++) {
        remaining = rest.substr(0,i) + rest.substr(i+1,rest.length-1);
        next = soFar + rest[i];

        recPerm(remaining, next);
      }
    }
  }
  recPerm(str,'');
  return perms;
}


function permAlone(str) {
  var perms = [];
  var noRepeats = 0;

  //generate all permutations
  perms = findPerms(str);
  perms.forEach(function(perm){
    var noRepeat = true;
    for (var i = 0; i < perm.length; i++) {
      //use regex to check permutations for repeats
      var re = new RegExp(perm[i]+'{2,}','i');
      if (perm.match(re)) {
        noRepeat = false;
      }
    }
    //if no-repeat increase valid noRepeat count
    if (noRepeat === true) {
      noRepeats++;
    }
//    console.log(perm + ', ' + noRepeat);
  });


//  console.log(perms);
//  console.log(perms.length);
  console.log(noRepeats);
  return noRepeats;
}

permAlone('aab');

/*

No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Permutations
RegExp

permAlone("aab") should return a number.
permAlone("aab") should return 2.
permAlone("aaa") should return 0.
permAlone("aabb") should return 8.
permAlone("abcdefa") should return 3600.
permAlone("abfdefa") should return 2640.
permAlone("zzzzzzzz") should return 0.

*/
