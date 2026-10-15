const clock = document.querySelector("#clock");

console.log(clock);

function clockMachine(){
    let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
   let second = date.getSeconds()

  clock.innerHTML = `${hour}:${minute}:${second}`
}

clockMachine()

setInterval(clockMachine , 1000)