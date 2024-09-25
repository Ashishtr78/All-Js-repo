// object 
// object creation
/*  const obj={
             userName:"Ravi",
             age:24,
             city:"noida",
             isWorking:true
}
console.log(`username is ${obj.userName}`);
console.log(`username is ${obj.age}`);
console.log(`username is ${obj.city}`);
console.log(`username is ${obj.isWorking}`);
console.log(`username is ${obj["userName"]}`);  */

// object print number key value in assending order

/*  const numObj={
     5:"React",
     4:"css",
     0:"html",
     3:"telwind",
     2:"node",
     1:"javascript"
}
console.log(numObj); */

/*  const obj={

    userName:"ravi",
    age:24,
    city:"noida"


}
console.log(obj); */
 
//accessing method

/*  const obj={

    "user name":"ravi",


}
console.log(obj["user name"]); */

// user define key name

/*  const key=prompt("enter the key")
const value=prompt("enter the value")
const info={

    [key]:value


}
console.log(info); */

// in empty object insert any key or value

/*  const obj={}
const n=prompt("enter the n");
for(let i=0;i<n;i++)
{
    const key=prompt(`enter key info ${i}`);
    const value=prompt(`enter value info ${i}`);

    // insert a key value pair
    obj[key]=value;
}
console.log(obj); */

// 
/* const player1="virat";
const player2="Ronaldo";
const king={}
const n=prompt("enter the n value")
for(let i=1;i<=n;i++)
    {
        const key=prompt(`enter key info ${i}`);
        const value=prompt(`enter value info ${i}`);
    
        // insert a key value pair
        king[key]=value;
    }
console.log(king); */

                                 // ways to create object (06-sep-2024)

// by using cyrly braces and leterals

//const obj={}; //empty object

/*  const obj={"name":"chombi"}
console.log(obj); */

// by using new keyword and object constructor

//empty object with new keyword and object constructor
/*
const obj=new Object();
console.log(obj);  */

//argument object with new keyword and object constructor

/* 
const obj=new Object({name:"Tinku",age:23});
console.log(obj); 
console.log(obj.age);
console.log(obj["age"]);  */


                                                /* Constructor funtion */

//3* by using new keyword and constructor funtion 

/* constructor funtion name in upper camal case
 ex:-function CreatObject()
 {

 }
 1. constructor function return (this) by default
 2.this:- this is hold address of empty object
         ex:-this=address of empty object like (01x3)
 
         //               |> this is own building constructor
         function CreateObject(name,age,city)
           {
            this.name=name;
            this.age=age;
            this.city=city;
           }
    const obj=new CreateObject("Ravi",24,"noida");
    console.log(obj);
    console.log(obj.city); */

 /* 4> by using class 

 class Car
{
    constructor(name,prize,color,model)
    {
        this.name=name;
        this.prize=prize;
        this.color=color;
        this.model=model;

    }
}

const toyota=connew Car("fortuner","48L","whigth",2024);
console.log(toyota);

const landRover=new Car("Defender","1.4cr","whigth",90);
console.log(landRover); 

*/

// Add key value in object

/* const obj={
    name:"chombu",
    age:23,
    city:"America"
}
// obj["city"]="noida";
 if("namde" in obj){

    console.log("yes");

}
else{
    console.log("no");
}  
      delete obj.city;
    console.log("city" in obj);
    */

                                       /*   Shalllow copy  */

 /*                                      const jack={
                                        cake:"chocolate Cake"
                                       }

                                       const oggy=jack;
                                       oggy.cake="red belvet";
                                       if(jack.cake==="chocolate Cake")
                                       {
                                        console.log("yes");
                                       }
                                       else
                                       {
                                        console.log("no");
                                       }
                                       
*/

                                           /* For in loop*/

/*  Syntax:-  for(value  in obj)
{                            |> object refrence
c.log(value);
} */

const obj={
    name:"chombu",
    age:23,
    city:"America"
}
const obj1={}
// for accesing only key value
for(key in obj)
{
   obj1[key]=obj[key];

}
console.log(obj1);
