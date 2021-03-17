const loadHome = function() {
    const contentDiv = document.querySelector("#content");

    const navBtns = document.createElement("ul");
    contentDiv.appendChild(navBtns);

    const homeBtn = document.createElement("li");
    homeBtn.classList.add("nav-btns");
    homeBtn.setAttribute("id", "home-btn");
    homeBtn.textContent = "Home";
    navBtns.appendChild(homeBtn);

    const menuBtn = document.createElement("li");
    menuBtn.classList.add("nav-btns");
    menuBtn.setAttribute("id", "menu-btn");
    menuBtn.textContent = "Menu";
    navBtns.appendChild(menuBtn);

    const contactBtn = document.createElement("li");
    contactBtn.classList.add("nav-btns");
    contactBtn.setAttribute("id", "contact-btn");
    contactBtn.textContent = "Contact";
    navBtns.appendChild(contactBtn);

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-content");
    contentDiv.appendChild(homeDiv);
  
    const header1 = document.createElement("h1");
    header1.textContent = "Tea Delight";
    homeDiv.appendChild(header1);

    const para = document.createElement("p");
    para.classList.add("home-description");
    para.textContent = "Best tea around town";
    homeDiv.appendChild(para);

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const footerDiv = document.createElement("div");
    footerDiv.textContent = "Made by stsui1129";
    contentDiv.appendChild(footer);
    footer.appendChild(footerDiv);
}

export default loadHome;