import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const initPageLoad = () => { 
    
    loadHome();
    loadMenu();
    loadContact();
};

export default initPageLoad;