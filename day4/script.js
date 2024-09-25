

let a=1;
var b=2;
const c=3;
{
   b=40;
   let  b=10;
   
   const c=30;
   console.log("inside block "+a);
   console.log("inside block "+b);
   console.log("inside block "+c);
}
console.log("outside block "+a);
console.log("outside block "+b);
console.log("outside block "+c);


/*
let b=2;
{

   b=20;
   console.log("inside block "+b);
}
console.log("outside block "+b);
*/
