class Dog {
    constructor(myData) {
        Object.assign(this, myData)
        this.dogCnt = 0
    }

    renderDog() {
        document.getElementById('entry').innerHTML = 
        `
        <div id="avatar">
            <div id="badge"></div>
            <div id="labels">
                <h1>
                    <span id="name">${this.name}, </span>
                    <span id="age">${this.age}</span>
                </h1>
                <h2>
                    <span id="bio">${this.bio}</span>
                </h2>
            </div>
        </div>
        `
        document.getElementById('avatar').style.backgroundImage = `url(${this.avatar}')`
    }

    renderBadge() {
        document.getElementById('badge').innerHTML =
        `
        <h1>HELLO THERE!</h1>
        <img src="${this.badge}">
        `
    }
}

export default Dog