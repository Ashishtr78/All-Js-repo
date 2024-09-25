//  Apply css with the help of dom 

                     //Dom(method)
// 1>document.body
/*
const body=document.body;
body.style.backgroundColor="";
*/

// 
//2>document.getElementById("value of id attribute")
// selecting tag by id
/*
const heading=document.getElementById("root");
heading.style.cssText="color:;font-size:50px;"

*/
//3>>document.getElementsByClassName("value of class")
// accesing with class name
/*

const divchild=document.getElementsByClassName("item"); // it return html collection
// console.log(divchild);
// divchild[0].style.color="red"
// divchild[3].style.color="red"

*/
//Accesing with tag
//document.getElementByTagName("tag name");
/*
const divs=document.getElementsByTagName("div");
console.log(divs);
divs["parent"].style.cssText="color:red;";
divs["item"].style="color:red"

*/

//Accesing with querySelector
// it will take one if it find it true

/*const divs=document.querySelector("#root");
*/


// querySelectorAll

const color=["red","blue","yellowgreen","tomoto","cyan"];
const divs=Array.from(document.querySelectorAll(".item"));

console.log(divs);
divs.map((val,i,arr )=> {
      if(i%2!==0)
         val.style.color="red";
    
});







