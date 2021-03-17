import initPageLoad from "./modules/initial-page-load";

const initSite = (() => {

    initPageLoad();

    const homeDiv = document.querySelector(".home-content");
    const menuDiv = document.querySelector(".menu-content");
    const contactDiv = document.querySelector(".contact-content");
    menuDiv.classList.add("hide-content");
    contactDiv.classList.add("hide-content");

    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const contactBtn = document.querySelector("#contact-btn");

    homeBtn.addEventListener('click', () => {
        homeDiv.classList.remove("hide-content");
        menuDiv.classList.add("hide-content");
        contactDiv.classList.add("hide-content");
    })

    menuBtn.addEventListener('click', () => {
        menuDiv.classList.remove("hide-content");
        homeDiv.classList.add("hide-content");
        contactDiv.classList.add("hide-content");
    })

    contactBtn.addEventListener('click', () => {
        contactDiv.classList.remove("hide-content");
        homeDiv.classList.add("hide-content");
        menuDiv.classList.add("hide-content");
    })
})();




