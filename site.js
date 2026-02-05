document.title = "Kwanza's Site"
document.body.style.backgroundColor = 'oldface'

const javascript = document.querySelector('h1')
javascript.style.color = 'steelblue'

//W3 Assignment
const hours = new Date().getHours() // current hour


const isMorning = hours >= 4 && hours < 12 //  morning
const isAfterNoon = hours >= 12 && hours < 17 // afternoon
const isEvening = hours >= 17 || hours < 4 // evening 

let greeting

if (isMorning){
     greeting = "Good Morning Sunshine!"
}else if (isAfterNoon){
     greeting = "Good Afternoon! Where's my diet Dr.Kelp?"
}else if(isEvening){
     greeting = "Good Evening, Second wind?"
}

 div = document.querySelector('#welcome')
 div.innerHTML = greeting

