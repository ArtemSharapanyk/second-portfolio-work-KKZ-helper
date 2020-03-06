import './assets/css/mainSettings.css';
import './assets/css/litPage/main.css';
import './assets/css/media/litPageMedia.css';

document.addEventListener('DOMContentLoaded', () => {
    const menuAdder    = require('./js/menu');
    const loader       = require('./js/loader');
        
    new Promise((resolve, reject) => {
        loader('.loader');
        resolve();
    }).then(() => {
        menuAdder('.menu', '.menu li', '.toggleBtn', '.logo');
    }).then(() => {
        new WOW().init();
    });

    const tab    = document.querySelectorAll('.tab');
    const sparrows = document.querySelectorAll('.sparrow');

    for(let i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', () => {
            if(tab[i].classList.contains('activeTab')) {
                tab[i].classList.remove('activeTab');
                sparrows[i].classList.remove('activeSparrow');
            }
            else{
                tab[i].classList.add('activeTab');
                sparrows[i].classList.add('activeSparrow');
            }
        });
    }
});