import loadAbout from './modules/about';


function initPageLoad() {
    const content = document.getElementById("content");
    loadAbout();
}

export default initPageLoad;