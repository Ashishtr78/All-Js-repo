// Event:-Action perform by the user
/**
 * event object:- it is created by the browser(it contain which typeof event you are perform)
 * event handler:
 *         1>event listner:-
 *             a>HTML way :-
 *                           {
 *                             <h1>
 *                            
 *                                 hellow world !
 * 
 *                                </h1>
 *                              <bottom onclick="" changeText()>
 *                                  Click
                                 </bottom>
                                 function changeText()
                                 {
                                 const h1=getElementById("root")
                                 h1.textContend="jay shree ram";
                                 }
 */

                                 /*
function changeText()
{
    const h1=document.getElementById("root");
    h1.textContent="jay shree ram !";
    h1.style.color="red";
}
                               */
                               
const button=document.querySelector("button");
/*
 2 button.onclick=changeBg;

function changeBg(){
  let i=0;
  letc=0


onsct body=document.body
body.style.cssText="background-color:black;color:white"
}
                               */

// 3 addEventListner
                   /*
const button=document.querySelector("button");

button.addEventListener("click",()=>{

    const body=document.body
body.style.cssText="background-color:black;color:white"
})
                  */

/* Mouse down up 

button.addEventListener("mouseup",()=>{

console.log("fie");

})
button.addEventListener("mousedown",()=>{

    console.log("fieubvrwfe");
    
    })
*/

// mouseover

button.addEventListener("mouseover",()=>{

   const body=document.body
body.style.cssText="background-color:black;color:white"
})

// mouseout

button.addEventListener("mouseout",()=>{

    const body=document.body
 body.style.cssText="background-color:white;color:black"
 })

 window.addEventListener("wheel")
 
