import "../styles/styles.css";
import "lazysizes";
import Parallox from "./modules/Parallox";
import RevealOnScroll from "./modules/RevealOnScroll";
import Accordion from "./modules/Accordion.Js";
import Swiper from 'swiper';
import 'swiper/css';
// import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 2,
    grabCursor: true
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => myfunction())
document.querySelector('.swiper-button-next').addEventListener('click', () => myfunction1())

function myfunction() {
    console.log('Hehe');
    swiper.slidePrev();
    document.querySelector('.swiper-button-prev').style.opacity = 0.3;
    document.querySelector('.swiper-button-next').style.opacity = 1;

}

function myfunction1() {
    console.log('Hehe');
    swiper.slideNext();
    document.querySelector('.swiper-button-next').style.opacity = 0.3;
    document.querySelector('.swiper-button-prev').style.opacity = 1;

}


new RevealOnScroll(document.querySelectorAll(".rvl"), 75);
new Parallox();
new Accordion();

new StickyHeader();
// ADD the Exact classes name for revealing effects and percentages;
// new RevealOnScroll(document.querySelectorAll(".add-class"), 60)
// ADD the Exact classes name for revealing effects and percentages;
// new MobileMenu();
// let modal

// document.querySelectorAll(".open-modal").forEach(el => {
//     el.addEventListener("click", e => {
//         e.preventDefault()
//         if (typeof modal == "undefined") {
//             import ( /* webpackChunkName: "modal" */ './modules/Modal').then(x => {
//                 modal = new x.default()
//                 setTimeout(() => modal.openTheModal(), 20)
//             }).catch(() => console.log("There was a problem."))
//         } else {
//             modal.openTheModal()
//         }
//     })
// })

if (module.hot) {
    module.hot.accept();
}