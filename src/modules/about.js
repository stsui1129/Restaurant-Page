const aboutPage = function () {
    const contentDiv = document.querySelector("#content");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("restaurant-image");
    const backgroundImage = document.createElement("img");
    backgroundImage.setAttribute("src", /images/restaurantpicture.jpeg);


    contentDiv.appendChild(imageDiv);
    imageDiv.appendChild(backgroundImage);
}