                                          // destructuring
// object Destrustering

/*

const obj={
    name:"ashish",
    age:56,
    city:"noida"
}

const{name}=obj;

console.log(name);
console.log(city);
console.log( age);

*/

// Array destructering

const movies=["golmal","welcome","php"];
const[a,b,c]=movies;
// const[a, ,c]=movies;
console.log(a+" "+b+" "+c);

const user={
    name:["Amit","Aditya","Amrita","jagmeet","asif","Manish"],
    salary:{
        sal1:"1lpa",
        sal2:"2lapa",
        sal3:"3lpa",
        sal4:"1lpa",
        sal5:"2lapa",
        sal6:"3lpa",
        sal7:"6lpa"
    }
    }
    /*
   // array destruring
    const{name,salary}=user;
    const[Amit,Manish]=name;
    console.log(Amit+" "+Manish);

    //object destruering
    const{sal1,sal7}=salary;
    console.log(sal1+" "+sal7);

    */
   /*
   const{name:[u1,,,u4,,,,u7],salary:{sal1,sal7}}=user;
   console.log(u1+" "+u4);
   console.log(sal1+" "+sal7);
   */