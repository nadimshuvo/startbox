import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".navigation")

        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight
        }, 333))
    }

    runOnScroll() {
        if (window.scrollY > 60) {
            this.siteHeader.classList.add("navigation--dark")
        } else {
            this.siteHeader.classList.remove("navigation--dark")
        }
    }
}

export default StickyHeader;