//title list
const titleList = document.querySelectorAll('.title');

//add animation for title list elements
titleList.forEach((el) => {

    //underline animation
    gsap.from(el.children[1], {
        width: 0,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: 'top bottom'
        }
    });

    //text title animation
    gsap.from(el.children[0], {
        opacity: 0,
        bottom:-100,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
        }
    });
});
