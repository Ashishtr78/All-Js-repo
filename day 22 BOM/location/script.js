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
const btn3=document.querySelector("#btn3");
const btn4=document.querySelector("#btn4");
const btn5=document.querySelector("#btn5");
  btn1.addEventListener("click",()=>{

window.location.assign("https://www.snapchat.com/","_blank");

  })
  btn2.addEventListener("click",()=>{

    window.location.assign("https://www.google.com","_blank");
    
      })
      btn3.addEventListener("click",()=>{

        window.location.assign("https://www.facebook.com","_blank");
        
          })
                 // back method
          btn4.addEventListener("click",()=>{

          history.back();
            
              })
              btn5.addEventListener("click",()=>{
                // forword mwthod
               history.go(-2);
                
                  })