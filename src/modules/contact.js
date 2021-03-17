const loadContact = function() {
    const contentDiv = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-content");
    contentDiv.appendChild(contactDiv);

    const para = document.createElement("p");
    para.classList.add("contact-para");
    para.textContent = "Lorem ipsum this is just random text for contact tab";
    contactDiv.appendChild(para);
}

export default loadContact;