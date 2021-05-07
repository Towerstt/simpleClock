const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsToDegrees = (seconds / 60) * 360 + 90
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`

    const minutes = now.getMinutes()
    const minutesToDegrees = (minutes / 60) * 360 + 90
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`

    const hours = now.getHours()
    const hoursToDegrees = (hours / 12) * 360 + 90
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`

}
setInterval(setDate, 1000)

let moon = 'https://images.unsplash.com/photo-1620055374842-145f66ec4652?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
let elephant = 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
let abstract = 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80'
let mountains = 'https://images.unsplash.com/photo-1619299805149-43ddccdc3430?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80'
let sea = 'https://images.unsplash.com/photo-1619589690392-31f74fd21ac5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80'
let unset = 'https://images.unsplash.com/photo-1611656993299-9f9d73232b9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'

let select = document.querySelector('select')
select.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'moon':
            document.body.style.backgroundImage = `url(${moon})`
            break
        case 'elephant':
            document.body.style.backgroundImage = `url(${elephant})`
            break
        case 'abstract':
            document.body.style.backgroundImage = `url(${abstract})`
            break
        case 'mountains':
            document.body.style.backgroundImage = `url(${mountains})`
            break
        case 'sea':
            document.body.style.backgroundImage = `url(${sea})`
            break
        case 'unset':
            document.body.style.backgroundImage = `url(${unset})`
            break
        default:
            document.body.style.backgroundImage = `url(${unset})`
            break
    }

})