                                 1 // PUSH METHOD

// const arr=[10,20,30,40,50];
//  const res=arr.push(60) // push method return length of updeted arr
// console.log(arr);

                                2  // POP METHOD

// const arr=[1,2,3,4,52];
// const res=arr.pop();      // it will return deleted array element
// console.log(res);

                                    3  // UNSHIFT()

/* const users=["JHON","TROY"]; //it will insert   element in first index
 // USERS.unshift("TINKU");
users.unshift("name");
console.log(users); */
 
                                  4  //SHIFT() METHOD
 
 /* const users=["JHON","TROY"]; //it will delete first arr element 
 // users.unshift("TINKU");
users.shift(); // it will return deleted array element
console.log(users);  */

                                  5  // SPLICE()
 // INSERTION
 // DELETION
 // UPDETED

 // arr_ref.splice(a,b,c)
 // a= starting index
 // b=number of element to be deleted 
 // c= element to be inserted
 // it will return deleted value
 
                           6   //  INSERTION WITH SPLICE(A,B,C) METHODS
//  const arr=[1,2,5,6,7];
//  arr.splice(2,0,3,4);
// const res=arr.splice(2,0,3,4);
//  console.log(arr);


                            7    //  DELETION WITH SPLICE(A,B,C) METHODS
                
 /* const comedy=["Dhamal","tubelight","PHP","Race-3","Welcome"];
// const res=comedy.splice(1,2,);

 comedy.splice(1,3); 
console.log(comedy); */

                            8   //  UPDATION WITH SPLICE(A,B,C) METHODS
 /* const comedy=["Dhamal","tubelight","PHP","Race-3","Welcome"];
  // const res=comedy.splice(1,2,);
 
 comedy.splice(1,3,"PHP");
  console.log(comedy); */
  
                                
                            9  // Slice() method
// Slice(a,b)
// a=starting index
// b=ending index which is desired last index

/* const users=["tinku","chombi","komal","niraj"];
const female=users.slice(1,3);
console.log(female); */

/* const users=["mohan","chombi","chombu","komal"];
const myArray=users.slice(1);
myArray.splice(1,1);
console.log(myArray); */

                           10  // reverse

/* const arr=[1,2,3,4,5]
console.log(arr.reverse()); */

                             11        // IndexOf()

/*  const arr=["mohan","sunny","raj","sunny"]
console.log(arr.indexOf("home"));    //:- index of an element is  -1
console.log(arr.indexOf("sunny",2)); */

                                 12    // includes()
/* const arr=["Ravi","Sunny","sunny","fodv"];
console.log(arr.includes("Sunny")); */


                                 13   // sort(callback) method

 // Syntax:- arr.sort((a,b)=>a-b)
//                     Callback function

 /* const arr=[5,3,4,2,1];
 arr.sort((a,b)=>a-b);  // Ascending Order
 arr.sort((a,b)=>b-a);  // Descending Order
 console.log(res);

 //            return
 // (a-b)        -VE      NOSWAP
 // (a-b)        +VE      SWAP
 //  (a-b)       0        NOSWAP
 

    */

                             14     //foreach(callback)

/* Syntax:- arr.forEach((value,index,array)=>{
                          10   ,0    ,[10,20,30,40]


})  */

/*
let output=[];
let arr=[10,20,30,40];
let acc=[1,2,3,4,5];

const res=arr.forEach((value,index,arr)=>{

output.push((value+10));
}
)
  console.log(output);  
  console.log(res);   
  
  */

  /* let arr=[5,23,27,93];
  let output=[];
  arr.forEach((val,i,array) => {
     
  output.push(Math.floor(val/2))
  });

  console.log(output);  */

  /* let arr=[1,2,3,4,5];
  let sum=0;

  arr.forEach((val,i,array)=>{

   sum=sum+val;
   

  })
  console.log(`sum is ${sum}`);  

  */
 /*
  let arr=[1,2,3,4,5];
  let output=[];

  arr.forEach((val,i,arrar)=>{

arrar[i]=((val**2));
   

  })

  arr.forEach((val,i,arrar)=>{

    arrar[i]=(Math.sqrt(val));
       
    
      })
  console.log(arr);

  */


                                15    // MAP(Callback)

/* Syntax:- let arr=[1,2,3,4,5];
          const output=  arr.map(val,index,arr)=> val*10)
            console.log(output);
            // it will not modify the original array

    */            

     /*       let arr=[1,2,3,4,5];
            sum=0;
            const output=  arr.map((val,index,arr) => {

                sum=sum+val;
            })
              console.log(sum);   

     */


                             16      // Reduce(callback)

/* Syntax:- reduce(callback,initial value of accumulator)  
   1=> it can return single value 
*/

/*   let arr=[1,2,3,4,5];
let out=[];
const sum=arr.reduce((acc,val)=>{
    acc= acc+val
    out.push(acc)
    return acc;
}

,[1,2,3]);

console.log(sum);
console.log(out);

*/

                                       //Filter(callback)

/*  Syntax:- let arr=[10,20,30,40,50];
             arr.filter((val,index,array)=> val>30) 
             console.log(arr);
             */

   /*          let arr=[10,20,30,40,50];
             const res=arr.filter((val,index,array)=> val>30) // it will not modify original array
                                                              // it return new filter array
             console.log(res);

             */

                                 // flat()
    
/*  let arr=[10,20,[30,40],[50,60,[70,80]],90];
const res=arr.flat();
console.log(arr);
*/

                                // isArray()

let arr=[];
let arr1={};
// let arr2=();
console.log(arr.isArray(arr));