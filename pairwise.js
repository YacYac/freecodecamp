function pairwise(arr, arg) {
  var usedIndexes = [];
  var indexSums = [];
  var sum;
  // console.log('arr: ' + arr);
  // console.log('arg: ' + arg);
  arr.forEach(function(element1,index1,array) {
    arr.forEach(function(element2,index2,array) {
      if (index1 !== index2 && element1 + element2 === arg && usedIndexes.indexOf(index1) === -1 && usedIndexes.indexOf(index2) === -1) {
        // console.log('element1: ' + element1);
        // console.log('index1: ' + index1);
        // console.log('element2: ' + element2);
        // console.log('index2: ' + index2);
        // console.log('element1 + element2 = ' + (element1 + element2));
        // console.log('');
        usedIndexes.push(index1);
        usedIndexes.push(index2);
        indexSums.push(index1 + index2);
      }
    });
  });

  if (indexSums.length > 1) {
    sum = indexSums[0] + indexSums[1];
  } else  if (indexSums.length === 1) {
    sum = indexSums[0];
  } else {
    sum = 0;
  }

  // console.log('indexSums: ' + indexSums);
  // console.log(sum);
  // console.log();
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
pairwise([1, 3, 2, 4], 4);
pairwise([1, 1, 1], 2);
pairwise([0, 0, 0, 0, 1, 1], 1);
pairwise([], 100);
