let addLogicToMenu = (menu, menuItems, toggleBtn, logoOfSite) => {
    let controlBtn = document.querySelector(toggleBtn);
    let menuWrap   = document.querySelector(menu);
    let menuEls    = document.querySelectorAll(menuItems); 

    let logo       = document.querySelector(logoOfSite)

    const gsap = require('gsap/dist/gsap').gsap;

    let timeline = gsap.timeline({paused: true});

    let menuShowAnimation = gsap.timeline();

    menuShowAnimation.fromTo(logo, {
        y: 20,   
    },
    {
        y: 0,
        opacity: 1,
        duration: .5
    })
    .fromTo(toggleBtn, {
        y: 20
        },
        {
            y: 0,
            opacity: 1
        },
        '-=.5'
    );

    timeline.to(menuWrap, {
        duration: 1.2,
        background: '#fff',
        top: 0,
        ease: 'slow(0.7, 0.7, false)',
    })
    .from(menuEls, {
        duration: .3,
        y: -20,
        opacity: 0,
        stagger: .25
    }, '-=.8');

    controlBtn.addEventListener('click', () => {
        if(menuWrap.classList.contains('activeMenu')){
            timeline.reverse();
            menuWrap.classList.remove('activeMenu');
            setTimeout(() => controlBtn.classList.remove('activeMenuBtn'), 800);
        }
        else{
            menuWrap.classList.add('activeMenu');
            timeline.play();
            setTimeout(() => controlBtn.classList.add('activeMenuBtn'), 500);
        }
    });
};

module.exports = addLogicToMenu;
