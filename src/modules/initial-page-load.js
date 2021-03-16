import loadAbout from './about';
import loadMenu from './menu';
import loadContact from './contact';


function initPageLoad() {
    const content = document.getElementById("content");
    loadAbout();
    loadMenu();
    loadContact();
}

export default initPageLoad;