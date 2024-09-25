// const obj=
// {
// // username:"ashish",
// age:2,
// // city:"noida",

// }
// //const fun=obj.userInfo;
// const res=Object.keys(obj);
// const resa=Object.values(obj);
// console.log(res);
// console.log(resa);
//console.log(fun)

// resa.map(val => {

//    if(val>18 && val<=60)
//     console.log("this");
//    else
//      console.log(underage);


// })


                                //obj entries


/* const obj={
     
    name:"ashish",
    age:45


}

const arr=Object.entries(obj); //it make obj key and there value is array

console.log(arr);
const arr1=Object.fromEntries(arr); // it is opposite os entries method
console.log(arr1);

*/

                                      
                              // object.assign(target,source1,source2,source3,.............,sourcen)
 /*   const obj1={}
    const user={

        name:"ashish"
    }
    const info={
        age:34
    }
    const address={

        city:"noida",
        state:"up"
    }

    const res=Object.assign(obj1,user,info,address);

    console.log(res);

    */

                                  // Objest.freeze()

// After the freeze method it can not allow update,delete,and insertion

 /*  obj={

    name:"minku",
    age:24
}
console.log(obj);
Object.freeze(obj)
obj.age=34

console.log(obj);

*/

                                 //Object.isFrozen(obj_ref)

                            //      obj={

                            //         name:"minku",
                            //         age:24
                            //     }
                            //    // console.log(obj);
                            //    Object.freeze(obj)
                            //    const fre=Object.isFrozen(obj) // checking for obj is freeze or not
                                
                            //     console.log(fre);       

                            //     7347


                                  //Object.seal() and Object.isSeal()

  /*                                
// it is only updete in the object not insert any thing into it.

  const obj={
    name:"mohan",
    age:34
}

//Object.seal(obj);
console.log(Object.isSealed(obj)); // it is chect obj is seal or not 
obj.age=78;



console.log(obj);

*/

                                    //object.getOnPropertyName()
// it is used to extract key 
/*  
const obj={
    name:"mohan",
    age:34
}
const res=Object.getOwnPropertyNames(obj);
console.log(res);

*/


                                          //hasOwnProperty(obj.ref)

/*
 // it is return true or false

 const obj={
     name:"mohan",
     age:34
      }

const res=obj.hasOwnProperty(obj.age);

console.log(res);

*/

                                    // Object.is(value1,value2)
/*
//it is compare value1 to value2, it is compare right to left way

const obj={
    name:"mohan",
    age:34
     }

    const res=Object.is(obj.name,"mohan");
    console.log(res);

    if(Object.is(obj.age,34))
        console.log("it is true");

    */

                               //isExtensions(obj.ref) and preventExtensions(obj.ref)

 // preventExtension allow updation,deletion and no insertion
/*
 const obj={
    name:"mohan",
    age:34,
    city:"noida"
     }

     //Object.preventExtensions(obj);
     console.log(Object.isExtensible(obj)); // it is return true or false
     obj.gender="male";
     console.log(obj);

   */


                             //defineProperty(obj.ref,key name is string,value inside curly brases)

 /*                            
// with the help of defrineProperty we can not update,deletion configurable added value
// it is use three proterty these are writtable,enumerable and configurable these are by default is false we can make true the we will make changes in added values                           
const user={
name:"mohan",

    }

Object.defineProperty(user,"age",{value:45,
     writable:false,
     enumerable:false,
     configurable:false
})
console.log(user.age);


console.log(user);

*/

                            //getOwnPropertyDescreption(obj.ref,)