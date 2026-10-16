

const count = document.querySelector("#count")


const Inc = document.querySelector(".Inc")


const Res = document.querySelector(".res")


const dec = document.querySelector(".dec")
  console.log(count , Inc , Res , dec);
  
let counter = 0


console.log( "This is Counter",counter);

Inc.addEventListener("click" , ()=>{

    counter = counter + 1

   count.innerHTML = counter
})

Res.addEventListener('click' , ()=>{
    counter = 0

    count.innerHTML = counter
})

dec.addEventListener("click" , ()=>{
    counter = counter - 1


    count.innerHTML = counter
})