// console.log(window)
// console.log(window.innerHeight); // to know window heigth

// console.log(window.innerWidth);  // to know window width

// window.open()
//it is open new tab up side the curent tab
/**
 * window feature
 * 1>width
 * 2>height
 * 3>left
 * 4>top
 * 5>resizable
 * 6>Scrollbar
 * 7>Staus=yes/no
 * 8>menubar=yes/no
 * 9>toolbor=yes/no
 * 10>location=yes/no
 * 11>fullScreen=yes/no
 */
/*
const  btn=document.querySelector("button");
btn.addEventListener("click",()=>{
const url="https://open.spotify.com";
const windowname="ashish";
const w=800;
const h=400;
const top=math.flore((window.innerHeight-h)/2)
const left=math.flore((window.innerWidth-w)/2)
window.open(url,windowname,`width=${w}`,`heigth=${h}`,top=`${top}`,left=`${left}`)
})
*/

const btn1=document.querySelector("button");
// const btn2=document.querySelector("btn2");
btn1.addEventListener("click",()=>{

window.open("https://www.google.com/search?q=spotify&rlz=1C1VDKB_enIN976IN976&oq=SPO&gs_lcrp=EgZjaHJvbWUqBwgBEAAYjwIyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg9MgYIBRBFGD0yBggGEEUYPdIBCjIwNzMyajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8","chombo","width=600px , height=400px","top=40px","left=30px")

})

// btn2.addEventListener("click",()=>{

//     window.moveTo(200,400);
     
// })