// call apply bind method 
// call 
/*
// it will point our build obj ,
const obj={

    name:"ajay",
    age:45,
}

function getDetail(city,pin)
{
    console.log(this);
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
    console.log(this.pin);
}

getDetail.call(obj,"noida",221301);

*/

// Apply(obj.ref,array) method

/*
const obj={

name:"ajay",
age:24

}
obj.cit="noida"

function getDetail(city,pin)
{
    console.log(this);
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
    console.log(this.pin);
}

getDetail.apply(obj,["noida",223312]);


*/

// bind method 

/*
const obj={

    name:"mohan",
    age:33
    
    }
    obj.cit="noida"
    
    function getDetail(city,pin)
    {
        console.log(this);
        console.log(this.name);
        console.log(this.age);
        console.log(city);
        console.log(pin);
    }
    
    const res=getDetail.bind(obj,["noida",223312]);
    res();

    */

    // Rest and Spread 