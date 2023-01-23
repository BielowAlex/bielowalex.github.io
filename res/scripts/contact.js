
const contactDiv = document.querySelector('.contact');
const showFormBtn = document.querySelector('.show-form--btn');
const hideFormBtn = document.querySelector('.hide-form--btn');
const contactForm = document.querySelector('.contact__form');
const inputs = [
    document.getElementById('name'),
    document.getElementById('email'),
    document.getElementById('message'),
]

inputs[2].addEventListener('keyup',()=>{
    if(inputs[2].scrollTop>0){
        inputs[2].style.height = inputs[2].scrollHeight + 'px';
   }
});

showFormBtn.onclick = () => {
    gsap.to(contactDiv, {
        opacity: 1,
        top: 0,
        duration: 0.8
    })
}

hideFormBtn.onclick = () => {
    gsap.to(contactDiv, {
        opacity: 0,
        top: '100%',
        duration: 0.8
    });
}

const errorAnimation = (el) => {
    gsap.to(el.parentElement, {
        duration: 0.2,
        x: -20,
        // rotate:0.5,
        ease: "rough"
    });
    gsap.to(el.parentElement, {
        duration: 0.2,
        delay: 0.2,
        x: 20,
        // rotate:-0.5,
        ease: "rough"
    });
    gsap.to(el.parentElement, {
        duration: 0.2,
        delay: 0.4,
        x: 0,
        // rotate:0,
        ease: "rough"
    })
}

const emailValidator = (email) => {
    const regular = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

    return !regular.test(String(email).toLowerCase());
}

const formValidator = () => {
    let isError = false;
    inputs.forEach(el => {
        if (el.value === '') {
            errorAnimation(el);
            isError = true;
        }
    });

    if (inputs[0].value.length < 2) {
        errorAnimation(inputs[0]);
        isError = true;
    }

    if(emailValidator(inputs[1].value)){
        errorAnimation(inputs[1]);
        isError = true;
    }

    if(inputs[2].value.length<10){
        errorAnimation(inputs[2]);
        isError = true;
    }
    return isError;
}

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formValidator()) {
        emailjs.sendForm('service_50jqimd', 'template_miu5jzh', event.target, 'ctqj7GY5vzVNEDoWI')
            .then(() => {
                gsap.to(contactDiv, {
                    opacity: 0,
                    top: '100%',
                    duration: 0.8
                });
            }, (err) => {
                alert(JSON.stringify(err));
            })
    }

})
