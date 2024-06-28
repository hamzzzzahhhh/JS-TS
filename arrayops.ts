let message: string = "Hello world";

console.log(message);

let array1: string[] = [];

array1.push(message);

array1.push('Apples');

array1.push('Oranges');

console.log(array1);

//lets now use the shift operation to remove the first element from the array and shift all elements to the left inplace

array1.shift(); //returns the element returned

console.log(array1);

//--------------------------

let x: number = array1.unshift(message);

console.log(x);

console.log(array1);

//unshift puts the element at the left of the array at the start and returns the length of the array

//---------------------------


let findanelement = array1.find((element) => {
    return element === 'Apples';
});

console.log(findanelement); //find returns the first element that satisfies the function embedded inside

//-------------

let filterarray1 = array1.filter((element) => {
  return element.length < 7;
})

console.log(filterarray1)

let hassubstring : boolean = filterarray1[0].includes("App");

console.log(hassubstring);

//------------

let someMethod : boolean;

someMethod = filterarray1.some((element) => {
  return element.length >= 8
})

console.log(filterarray1)
console.log(someMethod);

filterarray1.push('Watermelon')


someMethod = filterarray1.some((element) => {
  return element.length >= 8
})

console.log(filterarray1)
console.log(someMethod)

//the map function creates a new array by iteration over an array and performing a function over each element of the array
let numbersArray : number[] = [1,2,3,4,5,6,7];

const mapoverarray = numbersArray.map((x) => x*2);

console.log(mapoverarray);

const mapoverarray1 = numbersArray.map((x) => {
  return x * 3
});

console.log(mapoverarray1);

//----------------------------------------------------------