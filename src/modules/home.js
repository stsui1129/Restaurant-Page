const loadAbout = function() {
    const contentDiv = document.querySelector("#content");
    const aboutDiv = document.createElement("div");
    aboutDiv.addClass("about-content");
  
    const header1 = document.createElement("h1");
    header1.textContent = "Tea Delight";
    const header2 = document.createElement("h2");
    header2.textContent = "Best tea around town";

    contentDiv.appendChild(aboutDiv);
    aboutDiv.appendChild(header1);
    aboutDiv.appendChild(header2);
}

export default loadAbout;