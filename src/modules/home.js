const loadHome = function() {
    const contentDiv = document.querySelector("#content");

    const navBtns = document.createElement("ul");
    contentDiv.appendChild(navBtns);

    const homeBtn = document.createElement("li");
    homeBtn.classList.add("nav-btns");
    homeBtn.textContent = "Home";
    navBtns.appendChild(homeBtn);

    const menuBtn = document.createElement("li");
    menuBtn.classList.add("nav-btns");
    menuBtn.textContent = "Menu";
    navBtns.appendChild(menuBtn);

    const contactBtn = document.createElement("li");
    contactBtn.classList.add("nav-btns");
    contactBtn.textContent = "Contact";
    navBtns.appendChild(contactBtn);

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-content");
    contentDiv.appendChild(homeDiv);
  
    const header1 = document.createElement("h1");
    header1.textContent = "Tea Delight";
    homeDiv.appendChild(header1);

    const header2 = document.createElement("h2");
    header2.textContent = "Best tea around town";
    homeDiv.appendChild(header2);  
}

export default loadHome;