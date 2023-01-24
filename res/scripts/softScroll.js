const linksList = document.querySelectorAll('.nav__link');

linksList.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        document.querySelector(''+link.getAttribute('href')).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
})