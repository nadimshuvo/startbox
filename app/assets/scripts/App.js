import "../styles/styles.css";
import "lazysizes";
import RevealOnScroll from "./modules/RevealOnScroll";
import Parallox from "./modules/Parallox";
import Popup from "./modules/Popup";
import Accordion from "./modules/Accordion.Js";
import Swiper from 'swiper';
import 'swiper/css';
// import MobileMenu from "./modules/MobileMenu";
import StickyHeader from "./modules/StickyHeader";
// Swiper Manipulations
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


new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".rvl"), 75);
new Parallox();
new Popup();
new Accordion();





if (module.hot) {
    module.hot.accept();
}