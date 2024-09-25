
// nested function inner function call in outer function


// function outer()
// {
//     console.log("inside outer function");

//     function inner()
//     {
//         console.log("inside inner function");
//     }
//     inner();
// }
// outer();


// nested function inner function call out side of outer function with return keyword


// function outer()
// {
//     console.log("inside outer function");

//     function inner()
//     {
//         console.log("inside inner function");
//     }
//     return inner;
// }
// const output=outer();
// output()


// Lexical Scoping / Scope Chain

//1 

// let a=10;
// function text()
// {
//     a++;
//     console.log(a);
// }
// text();

// 2


// let user="Ravi";
// function prtMsg()
// {
//     let user="Mohan"
//     console.log(`Good Morning ${user}`);
// }
// prtMsg();


//        Closure

// function parent()
// {
//     console.log("inside outer function");

//     let a=10;
//     function child()
//     {
//         // 11 + 11  + 10 +  12
//         a= ++a + a-- + a++ + ++a;
//         a++;
    
//         console.log("inside inner function");
//         console.log(a);
//     }
//     return child;
// }
// const res=parent();
// res();