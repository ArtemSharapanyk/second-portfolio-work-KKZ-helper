let addAnimationOfEls = (links) => {
    let gsap          = require('gsap/dist/gsap').gsap;
    let timeline      = gsap.timeline();

    timeline.from(links, {
        duration: .4,
        delay: .5,
        y: 20,
        opacity: 0,
        stagger: .2
    });

};

module.exports = addAnimationOfEls;