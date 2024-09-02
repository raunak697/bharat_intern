//  let myDiv=document.getElementById("main");
//  console.log(myDiv.id);
//  myDiv.id="container";
//  console.log(myDiv);
//  myDiv.className="header";
//  console.log(myDiv.className);
//  console.log(myDiv);
//  myDiv.style.width="200px";
//  myDiv.style.height="200px";
//  myDiv.style.backgroundColor="green";
//  myDiv.style.borderRadius="20px";
//  myDiv.style.border="4px solid black";
//  console.log(myDiv.getAttribute("id"));
//  console.log(myDiv.getAttribute("class"));
// myDiv.setAttribute("class","tail");
// console.log(myDiv);
// myDiv.setAttribute("style","width:500px ;height:500px;background-color:red");
// //myDiv.innerText
// //myDiv.innerContent
// //myDiv.innerHTML
// let myDiv=document.getElementByclassName("head")
// let mydiv=document.getElementByTagNmae("div")
// console.log(myDiv);
// let myDiv=document.querySelector("#main");
// console.log(myDiv);
// //queryselectorall returns nodelist which contains for each
// // getelementbyclassname and getelementbytagname returns htmlcollection which does not contain foreach
// let newarr=array.from(myDiv);
// let newdiv = document.createElement("div");
// newdiv.innerHTML="hello";
// newdiv.style.backgroundColor="blue";
// // document.body.appendchild(newdiv);
// // events
// document.getElementById('button').onclick=fuction(){
//     console.log("button clicked");
// }
// let obj ={};
// function getvalue(e){
//     obj[e.target.name]=e.target.value;
//     console.log(obj);
// }
// document.getElementById("field1")
//hoisting // variables declared with var support hoisting
//temporal dead zone ()
// variable declared with const and let does not support hoisting
// var sum=function(){
//     console.log("hello");
// }
// sum();
// // async wait
//  async function fetchdata(){
//     let res = await fetch("");
//     let data=await res.json();
//     return data;
// }
// fetchdata();
// // constructors
// // this
// let person ={
//     username: "raunak",

// }
// constructors in this first letter should be always capital

// promises, callback topics remaining 
//let arr=[1,2,3]
// classes
// class BankAccount{
//     #balance=0;
//     constructor(owner){
//         this.owner=owner;
//     }
//     deposit(amount){
//         this.#balance+=amount;
//         console.log('${this.owner} deposited ${amount}')
//     }
// }
//  three types of cases in hindi 
//camel case:- variables,functions --- firstName
//pascal case:- react components -- FirstName
//snack case:-keys-- first_namre, FIRST_NAME, First_Name