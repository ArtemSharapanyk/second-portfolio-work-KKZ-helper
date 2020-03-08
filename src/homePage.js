import './assets/css/mainSettings.css';
import './assets/css/homeWorkPage/main.css';
import './assets/css/media/homePageMedia.css'

document.addEventListener('DOMContentLoaded', () => {
    const menuAdder = require('./js/menu');
    const loader    = require('./js/loader');
        
    new Promise((resolve, reject) => {
        loader('.loader');
        resolve();
    }).then(() => {
        menuAdder('.menu', '.menu li', '.toggleBtn', '.logo');
        new WOW().init();
    });
});