document.title = "Kwanza's Site"
document.body.style.backgroundColor = 'oldface'

const javascript = document.querySelector('h1')
javascript.style.color = 'steelblue'

//W3 Assignment: Welcome
const hours = new Date().getHours() // current hour


const isMorning = hours >= 4 && hours < 12 //  morning
const isAfterNoon = hours >= 12 && hours < 17 // afternoon
const isEvening = hours >= 17 || hours < 4 // evening 

let greeting

if (isMorning){
     greeting = "Good Morning Sunshine!"
}else if (isAfterNoon){
     greeting = "Good Afternoon! Where's my diet Dr.Kelp!?"
}else if(isEvening){
     greeting = "Good Evening, Second wind?"
}

 div = document.querySelector('#welcome')
 div.innerHTML = greeting

//W4 Assignment: Secret

const key = "It's a secret to everybody."
localStorage.setItem(key, "😬...Victoria's?")

// W6 Assignment: Carousel

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 1
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


const nextButton = document.querySelector('#next')
const prevButton = document.querySelector('#prev')

nextButton.addEventListener('click', () => {
     currentImage++
     showImages()
})

prevButton.addEventListener('click', () => {
     currentImage--
     showImages()
})

setInterval(() =>{
     currentImage++
     showImages()
}, 5000)

