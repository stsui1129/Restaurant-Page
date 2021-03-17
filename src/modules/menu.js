const loadMenu = function() {
    const contentDiv = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-content");
    contentDiv.appendChild(menuDiv);

    const bubbletea = document.createElement("img");
    bubbletea.classList.add("bubbletea-image");
    bubbletea.setAttribute("src", "./images/bubbleteamenu.jpeg");
    bubbletea.setAttribute("alt", "menu of bubble tea");
    menuDiv.appendChild(bubbletea);

    const para = document.createElement("p");
    para.classList.add("menu-para");
    para.textContent = "Lorem ipsum this is just random text for menu tab";
    menuDiv.appendChild(para);
}

export default loadMenu;
