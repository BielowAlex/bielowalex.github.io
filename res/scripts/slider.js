//slide list
const slideList = document.querySelector('.slides-list').children;

//timeout var
let timer = null;

//slide count
let id=0;

//recursive func slide changing
const slideChanging = ()=>{
    timer = setTimeout(()=>{
        if(id!==2){
            //hide slide with id
            gsap.fromTo(slideList[id],{opacity:1,left:`${window.innerWidth<=585?10:20}%`},{opacity: 0,duration:1,left:'100%'});
            //show slide with id+1
            gsap.to(slideList[id+1],{left:`${window.innerWidth<=585?10:20}%`,duration: 1,opacity:1,delay:1});

            //change slide count
            id++;
            //call this func
            slideChanging();
        }else{
            //hide slide with id
            gsap.fromTo(slideList[id],{opacity:1,},{opacity: 0,duration:1,left:'100%'});
            //show first slide
            gsap.to(slideList[0],{left:`${window.innerWidth<=585?10:20}%`,duration: 1,delay:1, opacity:1});

            //set first slide id
            id=0;
            //call this func
            slideChanging();
        }
    },4500);
}

slideChanging();

