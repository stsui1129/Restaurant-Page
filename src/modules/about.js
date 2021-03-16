const loadAbout = function() {
    const contentDiv = document.querySelector("#content");

    // const imageDiv = document.createElement("div");
    // imageDiv.classList.add("restaurant-image");
    // const backgroundImage = document.createElement("img");
    // backgroundImage.setAttribute("src", "./images/restaurantpicture.jpeg");
    // backgroundImage.setAttribute("class", "background-image")
    const header1 = document.createElement("h1");
    header1.textContent = "Tea Delight";
    const header2 = document.createElement("h2");
    header2.textContent = "Best tea around town";


    // contentDiv.appendChild(imageDiv);
    // imageDiv.appendChild(backgroundImage);
    contentDiv.appendChild(header1);
    contentDiv.appendChild(header2);

}

export default loadAbout;