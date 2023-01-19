//variables
const factsList = document.querySelector('.facts__list');

//reg Plugin
gsap.registerPlugin(ScrollTrigger);

//create timeline
const factsTimeLine = gsap.timeline();

//timeline animation func Show Facts
factsTimeLine.from(factsList.children[0], { opacity:0,x:'100%'})
    .from(factsList.children[1], { opacity:0,x:'100%'})
    .from(factsList.children[2], { opacity:0,x:'100%'})

//func Show Facts on scroll
ScrollTrigger.create({
    animation:factsTimeLine,
    trigger:'.facts',
    start:'center bottom',
    end:'+=250',
    scrub:5,
})

