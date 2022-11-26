import data from './data.js'
import Dog from './Dog.js'

const myData = {}
Object.assign(myData, data)

const currentDog = new Dog(myData)
const heartBtn = document.getElementById('heart-btn')
const crossBtn = document.getElementById('cross-btn')

// initialization state
const init = () => {
    const currentDog = new Dog(myData[0])
    currentDog.renderDog()
}
init()


// click on heart (like) button
const likeDog = () => {
    renderLike()
    delete myData[currentDog.dogCnt]
    waitAndShowNextDog(500)
}

// click on cross (dislike) button
const dislikeDog = () => {
    renderNope()
    delete myData[currentDog.dogCnt]
    waitAndShowNextDog(500)
}

// render next dog in the queue
const showNextDog = () => {
    currentDog.dogCnt++
    
    if (currentDog.dogCnt >= data.length) {
        currentDog.dogCnt = 0
    }
    const myDog = new Dog(myData[currentDog.dogCnt])
    myDog.renderDog()
}

// render LIKE badge
const renderLike = () => {
    currentDog.badge = 'images/badge-like.png'
    currentDog.renderBadge()
}

// render NOPE badge
const renderNope = () => {
    currentDog.badge = 'images/badge-nope.png'
    currentDog.renderBadge()
}

const waitAndShowNextDog = (milliseconds) => {
    removeClickables()
    
    setTimeout(function() {
        restoreClickables()
        
        // test whether the dogs object is empty
        if (Object.keys(myData).length === 0) {
            renderNoMoreDogs()
        } else {
            showNextDog()
        }
    }, milliseconds)
}

const renderNoMoreDogs = () => {
    document.getElementById('entry').innerHTML =
    `
    <div id="no-more-dogs">
    <h1>No more dogs ☹️</h1>
    </div>
    `
    removeClickables()
}

const removeClickables = () => {
    heartBtn.removeEventListener('click', likeDog)
    crossBtn.removeEventListener('click', dislikeDog)
    heartBtn.style.opacity = '.15'
    crossBtn.style.opacity = '.15'
}

const restoreClickables = () => {
    heartBtn.addEventListener('click', likeDog)
    crossBtn.addEventListener('click', dislikeDog)
    heartBtn.style.opacity = '1'
    crossBtn.style.opacity = '1'
}

// add listeners
heartBtn.addEventListener('click', likeDog)
crossBtn.addEventListener('click', dislikeDog)