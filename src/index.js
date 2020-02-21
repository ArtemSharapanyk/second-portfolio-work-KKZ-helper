import './assets/css/mainSettings.css';
import './assets/css/mainPage/main.css'

document.addEventListener('DOMContentLoaded', () => {
    const menuAdder = require('./js/menu');
        
    menuAdder('.menu', '.menu li', '.toggleBtn', '.logo');

    new WOW().init()
});