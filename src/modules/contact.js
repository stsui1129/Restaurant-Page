const loadContact = function() {
    const contentDiv = document.querySelector("#content");
    const contactDiv = document.createElement("div");
    const para = document.createElement("p");
    para.textContent = "Lorem ipsum this is just random text";

    contentDiv.appendChild(contactDiv);
    contactDiv.appendChild(para);
}

export default loadContact;