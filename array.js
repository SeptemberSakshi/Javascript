let a = [1,2,3,4]

a[0] = 0;
a[4] = 5;

console.log(a)

let b = []

for(i=0;i<a.length;i++){
    b[i]== a[i]  ;                          // copy element of a into b
}

console.log(b);

let c = Array.from(b)                         // in ES6 we copy elements of array b from c 

console.log(c);
