/**
 * Creating a tag
 */

// const heading=document.createElement("h1")
// heading.textContent="jay shree ram.."
/*

/1. AppendChild()
const first=document.createElement("h1");

first.textContent="hellow";
const body=document.body;
body.appendChild(first);
body.style.background="black";
first.style.color="white"

*/
// insert an element 

/**
 * insertAdjacentElement(position of an element,Refrence of an Element)
 */
/**take refrence */
const p1=document.createElement("p");
const p2=document.createElement("p");


p1.textContent="paragraph 1";
p2.textContent="paragraph 3";

/** insert adjacent Element */

const divs=document.querySelector("#inb");

/** insert */

// divs.insertAdjacentElement("beforebegin",p1);
// divs.insertAdjacentElement("afterend",p2);

divs.insertAdjacentElement("beforebegin",p1);
divs.insertAdjacentElement("afterend",p2)



