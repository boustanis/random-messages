const mood = [
    {
        text: 'happy',
        icon: '(´◡`)'
    },
    {
        text: 'sad',
        icon: '╥﹏╥'
    },
    {
        text: 'anxious',
        icon: '(*ಠ_ಠ;)'
    },
    {
        text: 'nervous',
        icon: '● ﹏ ●'
    },
    {
        text: 'angry',
        icon: '(⸅⸟⸄)'
    }
]

//You should ...
const advice = [
    'be worried',
    'relax',
    'harry up',
    'go outside',
    'do nothing',
    'do your laundry',
    'do your homework',
    'enjoy some coffee with a friend'
]

//because today ...
const forecast = [
    'is your lucky day!',
    'you will be injured',
    'you will step on shit',
    'you will find the true love',
    'you will die from covid',
    'you find your missing twin brother'
]

const getRandom = length => Math.floor(Math.random()*length)

let finalMessage = `You seem ${mood[getRandom(mood.length)].text} so you should ${advice[getRandom(advice.length)]} beacause today ${forecast[getRandom(forecast.length)]}`
document.querySelector('p').innerText = finalMessage
