const loadMenu = function() {
    const contentDiv = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.addClass("menu-content");
    contentDiv.appendChild(menuDiv);

    const para = document.createElement("p");
    para.textContent = "Lorem ipsum this is just random text";
    menuDiv.appendChild(para);
}

export default loadMenu;
