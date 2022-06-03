import "../styles/styles.css";
import "lazysizes";
import Parallox from "./modules/Parallox";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import Accordion from "./modules/Accordion.Js";
import StickyHeader from "./modules/StickyHeader";

// new Parallox();
new RevealOnScroll(document.querySelectorAll(".rvl"), 75);
new Accordion();

// new StickyHeader()
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