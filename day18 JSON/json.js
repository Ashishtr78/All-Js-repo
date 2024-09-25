// JSON

const obj ={
    name:"Ashish ",

    age: 34,
    city:"noida",
    pincode:201301
}

const json_obj=JSON.stringify(obj); //It is convert it into all key and value pair into in " name":"ashish" formate
console.log(json_obj);
const de_jons=JSON.parse(json_obj); // It is convert it into all key and value pair into in " name":"ashish" formate to normal form
console.log(de_jons);