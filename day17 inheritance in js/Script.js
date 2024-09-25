// prototype and inheritance in js
/*
const human={

    eat:()=>{
        console.log(`${this.name} is eat`)
    },
   sleep:()=>{
    console.log(`${this.name} is sleep`);
   }
    
}
const user={
name:"mohan"
}
user.__proto__=human;
console.log(user);
user.eat();
user.sleep(); */


// Object.setPrototypeOf(inherited obj,inherit obj)  and Object.getPropertyOf(obj.ref)


/*

const animal={
    type:"animal",
    sound:function(){
        console.log(`${this.name} can sound`);
    }
}
const dog={

    name:"somu",
    bark:()=>{
        console.log("woo woo");
    }

}
// dog.__proto__=animal;

Object.setPrototypeOf(dog,animal);
dog.sound();
console.log(dog);
console.log(dog.hasOwnProperty("sound"));
console.log(dog.hasOwnProperty("bark"));

console.log(Object.getPrototypeOf(dog)==animal);
                    */

                          // Object.create(parent obj.ref,drfine property)  important

/*
 const animal={
    type:"animal",
    sound:function(){
        console.log(`${this.name} can sound`);
    }
}
// 
// const human=Object.create(animal);
const human=Object.create(animal,{ name:
    {value:"mohan",
    writable:true,
    enumerable:false,
    configurable:false
},age:
{value:34,
    writable:false,
    enumerable:false,
    configurable:true
}});
human.name="Alia bhatt"
// delete human.age;
console.log(human.type);
console.log(Object.is("type","type"));

*/

//class and object

class animal{
    constructor (name)
    {
        this.name=name;
    }
    sound(){
        console.log("bark");
    }
}

class Dog extends animal{

constructor(name,bread){
    super(name);
    this.bread=bread;
   
   
}
   bark(){
    console.log("ksf");
   }
}

const dog1=new Dog("sheru","pitbull");
console.log(dog1);
console.log(Object.hasOwnProperty("dog.sound"));
