// let a=5;

// a++;//5

// a=a++ + a++ + --a+ a--;//6+7+7+7
// b=a +7;
// console.log(a);
// console.log(b++);

/* question 5   */
let a=5;
a=a++*2;
a=a++*2;
a=a++*2;
a=a++*2;  //a=81


let b=(++a*3 - a++*2 + a--*2);//243 - 162 + 164 =407-162=245
 b--;//244
 console.log(a);
 console.log(b);

/* question 6  */