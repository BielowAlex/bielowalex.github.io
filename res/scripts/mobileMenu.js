const showMenuBtn = document.querySelector('.show-menu--btn');
const menuOverlay = document.querySelector('.menu-overlay')
const navLink = document.querySelector('.menu-overlay__nav');
const linkList = navLink.children;
let isVisible = false;

showMenuBtn.onclick = () => {

    if (!isVisible) {
        buttonChangingAnimation(isVisible);
        showHideMenuAnimation(isVisible);
        showHideLinksAnimation(isVisible);

        isVisible = !isVisible;
    } else {
        buttonChangingAnimation(isVisible);
        showHideMenuAnimation(isVisible);
        showHideLinksAnimation(isVisible);

        isVisible = !isVisible;
    }
};

const showHideLinksAnimation = (isVisible) => {
    for (let i = 0; i < linkList.length; i++) {
        gsap.to(linkList[i], {
            x: isVisible ? '1000%' : '0',
            duration: 0.3 * i
        })
    }
}
const showHideMenuAnimation = (isVisible) => {
    gsap.to(menuOverlay, {
        x: isVisible ? '100%' : '0',
        duration: 1
    });
}

const buttonChangingAnimation = (isVisible) => {
    gsap.to(showMenuBtn.children[0], {
        y: isVisible ? 0 : 10,
        rotate: isVisible ? 0 : 45
    });
    gsap.to(showMenuBtn.children[1], {
        width: isVisible ? '75%' : '100%',
        rotate: isVisible ? 0 : -45
    });
    gsap.to(showMenuBtn.children[2], {
        x: isVisible ? 0 : '200%'
    });
}

for (let link of linkList) {
    link.onclick = () => {
        gsap.to(menuOverlay, {
            x: '100%',
            duration: 1
        });
        gsap.to(showMenuBtn.children[0], {
            y:  0 ,
            rotate: 0
        });
        gsap.to(showMenuBtn.children[1], {
            width:'75%',
            rotate:0
        });
        gsap.to(showMenuBtn.children[2], {
            x:0
        });

        isVisible = !isVisible
    }
}
