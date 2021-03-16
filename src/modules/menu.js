const loadMenu = function() {
    const contentDiv = document.querySelector("#content");
    const menuDiv = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum this is just random text";

    contentDiv.appendChild(menuDiv);
    menuDiv.appendChild(para);
}

export default loadMenu;
