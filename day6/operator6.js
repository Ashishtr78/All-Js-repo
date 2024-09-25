
// let a=5;
// --a;//4
// --a;//3
// --a;//2
// --a; //1


// a++;//1
// let c=a++;//2
//    console.log(a-- - a++);//1
//    console.log(a);
   
let a=5;

a=--a*3 + --a*2 - ++a*2;//12+6-8  a=10
a=(++a*3/2) // a=17.5
let b=(++a*2 + --a*2)/(++a*2); // (67 ) / 34          
console.log(a);
console.log(b);