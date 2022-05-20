let daysItem = document.querySelector("#days")
let hoursItem = document.querySelector("#hours")
let minItem = document.querySelector("#min")
let secItem = document.querySelector("#sec")


let countDown = ()=>{
    let futureDate=new Date("1 jan 2023")
    let currentDate= new Date();
    let myDate = futureDate - currentDate;
    //console.log(myDate)
    let days = Math.floor(myDate/1000/60/60/24);
    //console.log(days)
    let hours = Math.floor(myDate/1000/60/60)%24;
    
    let mins = Math.floor(myDate/1000/60)%60;
    
    let secs = Math.floor(myDate/1000)%60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = mins;
    secItem.innerHTML = secs;

}
countDown()
setInterval(countDown,1000)