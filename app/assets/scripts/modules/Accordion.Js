class Accordion {
    constructor() {
        this.menuIcon = document.querySelectorAll(".acc-header")
        this.events()
    }
    events() {

        this.menuIcon.forEach(el => {
            el.addEventListener("click", () => {
                el.classList.toggle('acc-header--red');
                el.nextElementSibling.classList.toggle('hidden-content--is-visible');
                el.firstElementChild.nextElementSibling.classList.toggle('acc-arrow--rotate')
            })
        });
    }
}
export default Accordion;