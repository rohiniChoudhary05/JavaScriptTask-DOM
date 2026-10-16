// const form = document.querySelector("#form")
// const email = document.querySelector("#email")
// const password = document.querySelector("#password")
// const btn = document.querySelector("#Btn")

// console.log(form ,email , password , btn);

// btn.addEventListener('click' ,(e)=>{
//     e.preventDefault()
//     console.log(email.value);
//     console.log(password.value);

//      // ham ko kisi chija ki value print karna hota hain to ( email.value ) likhate hain

// })

// const heading = document.querySelector('#heading')
// const mode= document.querySelector("#mode")

// mode.addEventListener("click" , ()=>{
// if(document.body.style.backgroundColor == 'white'){
//         document.body.style.backgroundColor = 'black'
//         heading.textContent = 'Dark Mode';
//         heading.style.color = 'white';
//         document.title = 'dark Mode';
//         mode.textContent = '🌛'

//     }else{
//         document.body.style.backgroundColor = 'white';
//         heading.textContent = 'Light mode';
//         heading.style.color  = 'black' ;
//         document.title = 'light mode';
//         mode.textContent= '🌞'
//     }
// })
// const heading = document.querySelector("#heading");
// const mode = document.querySelector("#mode");

// let isDark = false;

// mode.addEventListener("click", () => {

//     isDark = !isDark;

//     if (isDark) {
//         document.body.style.backgroundColor = "black";
//         heading.style.color = "white";
//         heading.textContent = "Dark Mode";
//         document.title = "Dark Mode";
//         mode.textContent = "🌛";
//     } else {
//         document.body.style.backgroundColor = "white";
//         heading.style.color = "black";
//         heading.textContent = "Light Mode";
//         document.title = "Light Mode";
//         mode.textContent = "🌞";
//     }

// });


//! HIDE AND SHOW PASSWORD
// const input = document.querySelector("input");
// const btn = document.querySelector("button");


// btn.addEventListener('click' ,()=>{
//     if(input.type === "password"){
//         input.type = 'text',
//         btn.textContent = 'Show'
//     }else{
//         input.type = 'password',
//         btn.textContent = 'Hide'
//     }
// })




const open = document.querySelector(".open")
const close = document.querySelector(".close")
const model = document.querySelector(".model")


open.addEventListener('click' ,()=>{
    console.log("open");
    
   model.classList.add("open")
})

close.addEventListener('click' ,()=>{
    console.log("close");
    
    model.classList.remove("open")
})