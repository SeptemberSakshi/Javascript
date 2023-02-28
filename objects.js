// Objects are mutable and can hold more than one value at a time in JS like functions , array
//  unlike primitive data type i.e null, string ,  number , boolean , undefined

let obj1 = {
  x :5,
  y: 2

}

obj1.x = 1;  // mutating the value 
obj1.z = 8;

console.log(obj1) 

let obj2 = {
    x : 5,
    y:2,
}


console.log(obj1 === obj2)  // false : Two objects with the same properties are not equal  , they can only be equal only if and only if they point to same underlying objects




