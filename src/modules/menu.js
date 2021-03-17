const loadMenu = function() {
    const contentDiv = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-content");
    contentDiv.appendChild(menuDiv);

    const para = document.createElement("p");
    para.classList.add("menu-para")
    para.textContent = "Lorem ipsum this is just random text for menu tab";
    menuDiv.appendChild(para);
}

export default loadMenu;
