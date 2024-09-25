// console.log(window.location);

//  location 
//  1.reload:-
//  const btn=document.querySelector("button");
//   btn.addEventListener("click",()=>{

// window.location.reload();

//   })

//2.replace

console.log(window.history);
const btn1=document.querySelector("#btn1");
const btn2=document.querySelector("#btn2");

  btn1.addEventListener("click",()=>{

window.location.assign("https://www.snapchat.com/","_blank");

  })

  //3 copy 
  window.addEventListener("copy",()=>{
    navigator.clipboard.writeText("http://127.0.0.1:5501/day%2022%20BOM/BOM%201/index.html");
     
    then(() => {
        console.log("text coy");
        
    }).catch((err) => {
        
    });
    
      })

    
      /**
       *          
       */