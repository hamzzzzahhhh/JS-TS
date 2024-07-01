var message = "Hello world";
console.log(message);
var array1 = [];
array1.push(message);
array1.push('Apples');
array1.push('Oranges');
console.log(array1);
//lets now use the shift operation to remove the first element from the array and shift all elements to the left inplace
array1.shift(); //returns the element returned
console.log(array1);
//--------------------------
var x = array1.unshift(message);
console.log(x);
console.log(array1);
//unshift puts the element at the left of the array at the start and returns the length of the array
//---------------------------
var findanelement = array1.find(function (element) {
    return element === 'Apples';
});
console.log(findanelement);

//line 22
