import './assets/css/mainSettings.css';
import './assets/css/anotherPage/main.css';
import './assets/css/media/anotherPageMedia.css';

document.addEventListener('DOMContentLoaded', () => {
    const menuAdder    = require('./js/menu');
    const loader       = require('./js/loader');
    const linksAnimate = require('./js/anotherLinksAnimation'); 
        
    new Promise((resolve, reject) => {
        loader('.loader');
        resolve();
    }).then(() => {
        menuAdder('.menu', '.menu li', '.toggleBtn', '.logo');
    }).then(() => {
        linksAnimate('.btn');
    });
});