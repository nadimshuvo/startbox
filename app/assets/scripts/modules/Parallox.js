// import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class Parallox {
    constructor() {
        this.image = document.getElementById('bg');
        this.browserHeight = window.innerHeight;
        // this.scrollThrottle = throttle(this.plox, 0).bind(this);
        this.events()
    }

    events() {
        window.addEventListener("scroll", () => this.plox())
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }


    plox() {
        console.log(window.scrollY + this.browserHeight);
        // console.log(this.image.offsetTop);
        let y = window.scrollY + this.browserHeight;
        console.log(y);
        if (window.scrollY + this.browserHeight > this.image.offsetTop && window.scrollY + this.browserHeight < 5988) {
            // console.log('Alhamdulillah');
            let x = 4488;
            let value = ((window.scrollY + this.browserHeight) - x) / -10;
            // console.log(value);
            this.image.style.bottom = value + 'px';

        }
        // window.scrollY + this.browserHeight
        // this.image.getBoundingClientRect().top
        // if (window.scrollY + this.browserHeight > this.image.offsetTop) {
        //     // let value = window.scrollY;
        //     console.log(value);
        // }
    }
}

export default Parallox;