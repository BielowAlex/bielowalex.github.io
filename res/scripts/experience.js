
const experienceList = document.querySelectorAll('.experience__info');

experienceList.forEach((experience) => {
    //experience div animation
    gsap.from(experience, {
        opacity: 0,
        scrollTrigger: {
            trigger:experience,
            start:'top bottom',
            scrub:true
        }
    });

    //date animation
    gsap.to(experience.children[0],{
        color:'#FF0026BC',
        duration:2,
        scrollTrigger: {
            trigger:experience.children[0],
            start:'top bottom',
            end:'top center',
            scrub:true
        }

    })
})
