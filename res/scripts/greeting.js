//variables
const greetingDiv = document.querySelector('.greeting__advert');
const rotateItem = document.querySelector('._rotate__item');
const lightElement = document.querySelector('.message');


//=======================================Vanilla JS=====================================\\
//rotate func
const rotateOnScroll = ()=>{
    rotateItem.style = `transform:rotate(${Math.floor(window.scrollY / 7)}deg)`
}

//func show message
greetingDiv.onclick = ()=>{
    lightElement.classList.contains('_active')
        ?lightElement.classList.remove('_active')
        :lightElement.classList.add('_active');
}

window.addEventListener('scroll', rotateOnScroll);


//=======================================Gsap animation=====================================\\

//register Plugin
gsap.registerPlugin(ScrollTrigger);

//func show greeting on scroll
gsap.to('.greeting',{
    x:0,
    rotate:360,
    duration:2.5,
    scrollTrigger:{
        trigger:'.greeting',
        start:'top center',
    }})


