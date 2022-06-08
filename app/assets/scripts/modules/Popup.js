class Popup {
    constructor() {
        this.menuIcon = document.querySelector(".click-btn")
        this.popUp = document.querySelector(".pop-up")
        this.popUpBg = document.querySelector(".pop-up-bg")
        this.popUpX = document.querySelector(".pop-up-x")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.addPopUp())
        this.popUpX.addEventListener("click", () => this.removePopUp())
    }

    addPopUp() {
        this.popUpBg.classList.add("pop-up-bg--active");
        this.popUp.classList.add("pop-up--active");
    }
    removePopUp() {
        this.popUpBg.classList.remove("pop-up-bg--active")
        this.popUp.classList.remove("pop-up--active")
    }
}

export default Popup;