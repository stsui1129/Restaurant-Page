const loadHome = function() {
    const contentDiv = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-content");
  
    const header1 = document.createElement("h1");
    header1.textContent = "Tea Delight";
    const header2 = document.createElement("h2");
    header2.textContent = "Best tea around town";

    contentDiv.appendChild(homeDiv);
    homeDiv.appendChild(header1);
    homeDiv.appendChild(header2);
}

export default loadHome;