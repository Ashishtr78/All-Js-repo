// let a=0
// let b=false
// console.log(a==b);
// console.log(a===b);


/*    logical operator */
// logical AND
/*
   let a=20;
   let b=10;
   let c=40;
   let d=30;
   let result=a>b && c>d;
   console.log(result); 
   */

// logical OR
/*
let a=+prompt("ENTER A NUMBER");
let b=+prompt("ENTER B NUMBER");
let c=+prompt("ENTER C NUMBER");
let d=+prompt("ENTER C NUMBER");
if(a>b)
{
    if(a>c)
    {
        if(a>d)
            {
                console.log("greater is "+a);
            }
    }
    
}
else if(b>c)
{
    if(b>d)
    {
        console.log("greater is "+b);  

    }
}
else if(c>d)
{
    console.log("greater is "+c);
}
else
{
    console.log("greater is "+d);
}
*/

let a=+prompt("ENTER THE NUMBER");

const Respons=(a%100!==0 && a%4===0) || a%400===0 ? " this is leap year" : " not leap year";
 console.log(a+Respons);

// const res=(a%2===0)?" even":" ODD"
// console.log(a+res);