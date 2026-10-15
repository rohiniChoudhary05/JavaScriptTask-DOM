
// document yne html ka file hot hai

// Object Mutable Hot hai
// what is Document Object Model ?   Dom manipulation Bhi kar skate hai

// ! Document Object Model

// It is a  tree-like represetation   of our Html  document
// Here each Tag is Know as Note
//  Dom is Responsible for making our Webpage interactive and dynamic
// console.log(document);

// ! DOM SELECTOR

//! 1.Document.getElementById()
// let box = document.getElementById("box");
// box.style.backgroundColor = "pink";
// box.style.color = "white";
// box.style.fontSize = "80px";
// box.style.fontWeight = "bold";
// box.style.marginBottom = "20px";
// console.log(box);

// !2.Document.getElementByClassName()
// let Containers = document.getElementsByClassName("container");
// console.log(Containers);
// HTML Collection is  an Impure Array
// console.log(Array.isArray(Containers)); // false
//! 3.Document.getElementByTagName()
// let element = document.getElementsByTagName("div")
// console.log(element); // htmlCollection(3) {"Div" "div" "div"}
// HTML Collection is  an Impure Array
// console.log(Array.isArray(Containers)); // false
//! 4. Document.querySelector()

 
// let Ele2 = document.querySelector('div , #box , .container')
// console.log(Ele2);

//  PRIORITY :Id> Class > tagName


// let element = document.querySelector("#box")
// console.log(element);


//! 5. Document.query.SelectorAll()


// let val = document.querySelectorAll(".container")
// console.log(val);  // return NodeList


// ! NodeList is a impure Array
// console.log(Array.isArray(val)); // false


// what is dom what is selector event and eventpropocation and dommanipulation


// ! DOM MANIPULATION
// let mainTag = document.querySelector("#main-container")
 
// let h3Tag =document.createElement("h3") // create a element is Dom
// let pTag = document.createElement("p")

// let aTag = document.createElement("a")
// aTag.href = "https://www.myntra.com"
// aTag.target = "_blank"
// h3Tag.textContent ="Hello Guys"  // create a TextContent in a Dom 
// pTag.innerHTML = "<em>Lorem</em> ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti voluptatibus totam repudiandae tempora quam animi reprehenderit maxime, obcaecati eius."
// aTag.textContent ="myntra"
// console.log(h3Tag);
// console.log(pTag);


// mainTag.appendChild(h3Tag)  // add karna hain main-Container ke andar
// mainTag.appendChild(pTag)  // ek bar me ek child ko append   kar skata hain 

// mainTag.append(h3Tag , pTag , aTag)  // append bahut sare ko add kar skata hain


// ! EVENT :-Action performed by the user 
// ex: click ,  scroll , dbClick , load , mouseenter , mouseout , mouseOver...

// ! 2 Ways To Apply Event
// 1.using event attribute
// 2.using addEventListener(Event , callbackFn) method <------RECOMMENDED  


// function singleClick(){
//     console.log("This is single Click Button");
    
// }


// function secondClick(){
//     console.log("This is Twice Button ");
    
// }

// function hoverBtn(){
//     console.log("This Hover Button");
    
// }

// let btnTag = document.createElement("button")

// btnTag.textContent = "Click Here"

// btnTag.addEventListener("click" ,()=>{
//     btnTag.style.backgroundColor = 'yellow'
//     btnTag.style.color = 'black'
//     console.log("Hii");
    
// })

// document.body.append(btnTag)


// let box = document.querySelector("#box")
// console.log(box);

// box.addEventListener("click"  ,()=>{
// console.log("I am div page");

// })

// RAINBOW TASK 
let section = document.querySelectorAll("section")
console.log(section);


section.forEach((e)=>{
    e.addEventListener("mouseenter" ,() =>{
     e.style.backgroundColor = e.textContent
     e.style.height = '50px'
     e.style.textAlign = 'center'
     e.style.fontSize ="30px"
    })

    e.addEventListener("mouseout", ()=>{
        e.style.backgroundColor = 'white'
    })
})