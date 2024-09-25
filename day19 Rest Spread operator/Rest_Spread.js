// Rest

/*

function cart(a,b,...c)
{
console.log(a);
console.log(b);
console.log(c);

}

cart("Maggies","Ice-Cream","Biscoit","Bottel","kitkat","perfume","makeup")

*/
/*
const movies=["php","welcome","Housefull2","Dhamal","dhol"]

//Destrustering
// rest opertor use with in array
const [a,b,...c]=movies;
console.log(a);
console.log(b);
console.log(c);
*/

//Rest Operator usecase with an obj
/*
const obj={

    name:"mohan",
    age:34,
    isWorking:true,
    sal:"35k",
    state:"up",
    city:"noida"
}

const {name,age,...value}=obj

console.log(obj.name);
console.log(obj.age);

*/

// Spread Operator

const arr=["perfume","shirt","ice-cream"];

function detail(i1,i2)
{
    console.log(i1);
}

detail(arr)