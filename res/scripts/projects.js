//projects div list
const projectsList = document.querySelectorAll('.project');

//variable for understanding project div is reverse or not
let isReverse = false;

//func for animation project elements||clear code
const projectElementsAnimation = (project, element, x) => {
    gsap.from(element, {
        x: x,
        opacity: 0,
        scrollTrigger: {
            trigger: project,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
        }
    });
}

projectsList.forEach((project) => {
    if (isReverse) {
        //right element
        projectElementsAnimation(project, project.children[0], '100%');

        //left element
        projectElementsAnimation(project, project.children[1], '-100%');

        //change isReverse variable
        isReverse = !isReverse

    } else {
        //right element
        projectElementsAnimation(project, project.children[1], '100%');

        //left element
        projectElementsAnimation(project, project.children[0], '-100%');

        //change isReverse variable
        isReverse = !isReverse
    }

});


