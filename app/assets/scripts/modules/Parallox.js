import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class Parallox {
    constructor() {
        this.image = document.getElementById('bg');
        this.browserHeight = window.innerHeight;
        this.scrollThrottle = throttle(this.plox, 200).bind(this);
        this.events()
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }


    plox() {
        console.log(window.scrollY + this.browserHeight);
        // console.log(this.image.offsetTop);

        if (window.scrollY + this.browserHeight > this.image.offsetTop) {
            console.log('Alhamdulillah');
            let x = 4488;
            let value = ((window.scrollY + this.browserHeight) - x) / -10;
            console.log(value);
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