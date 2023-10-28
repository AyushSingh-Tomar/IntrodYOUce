
// <!-----------------------------------------------------------------------NAV BAR-----------------------------------------------------------!>
const toggleBtn = document.querySelector('.home-navbar-toggle-btn')
const toggleBtnIcon = document.querySelector('.home-navbar-toggle-btn i')
const dropDownMenu = document.querySelector('.home-dropdown-menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
        ? 'bx bx-x'
        : 'bx bx-menu'
}

const toggleBtn1 = document.querySelector('.home-navbar-toggle-btn1')
const toggleBtnIcon1 = document.querySelector('.home-navbar-toggle-btn1 i')
const dropDownMenu1 = document.querySelector('.home-dropdown-menu1')

toggleBtn1.onclick = function () {
    dropDownMenu1.classList.toggle('open')
    const isOpen = dropDownMenu1.classList.contains('open')
    toggleBtnIcon1.classList = isOpen
        ? 'bx bx-x'
        : 'bx bx-menu'
    }

// <!-----------------------------------------------------------------------DARK-MODE-----------------------------------------------------------!>
const toggleModeBtn1 = document.querySelector('.ModeChange1')
const toggleModeIcon1 = document.querySelector('.ModeChange1 i')
const toggleModeBtn2 = document.querySelector('.ModeChange2')
const toggleModeIcon2 = document.querySelector('.ModeChange2 i')
const toggleModeBtn3 = document.querySelector('.ModeChange3')
const toggleModeIcon3 = document.querySelector('.ModeChange3 i')
const toggleModeBtn = document.querySelector('.ModeChange')
const toggleModeIcon = document.querySelector('.ModeChange i')
const TemplateMode = document.querySelector('.hero')
const headerMode = document.querySelector('.header')
const MyHeaderMode = document.querySelector('#myHeader')
const Body = document.querySelector('body')
toggleModeBtn.onclick = function () {
    Body.classList.toggle('DarkMode')
    TemplateMode.classList.toggle('DarkMode')
    MyHeaderMode.classList.toggle('DarkMode')
    const isOpen = Body.classList.contains('DarkMode')
    toggleModeIcon.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon1.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon2.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon3.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'

}
toggleModeBtn1.onclick = function () {
    Body.classList.toggle('DarkMode')
    TemplateMode.classList.toggle('DarkMode')
    MyHeaderMode.classList.toggle('DarkMode')
    const isOpen = Body.classList.contains('DarkMode')
    toggleModeIcon.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon1.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon2.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon3.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
}
toggleModeBtn2.onclick = function () {
    Body.classList.toggle('DarkMode')
    TemplateMode.classList.toggle('DarkMode')
    MyHeaderMode.classList.toggle('DarkMode')
    const isOpen = Body.classList.contains('DarkMode')
    toggleModeIcon.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon1.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon2.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon3.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
}
toggleModeBtn3.onclick = function () {
    Body.classList.toggle('DarkMode')
    TemplateMode.classList.toggle('DarkMode')
    MyHeaderMode.classList.toggle('DarkMode')
    const isOpen = Body.classList.contains('DarkMode')
    toggleModeIcon.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon1.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon2.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
    toggleModeIcon3.classList = isOpen
        ? 'bx bxs-sun'
        : 'bx bxs-moon'
}


// <!---------------------------------------------------------- HOME BANNER FADE OFF-----------------------------------------------------------!>
let image = document.getElementById('home-banner-op');

window.addEventListener('scroll', function () {
    let value = 1 + window.scrollY / -600;
    image.style.opacity = value;
    navBack.style.width = 1 - value;

})
// <!----------------------------------------------------COMMON NAVBAR AFTER FADE OFF----------------------------------------------------------!>
let sections = document.querySelectorAll('section')

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY + 150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height + 1000) {                //change to get navbar for further scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
    var header = document.getElementById("myHeader");

    var sticky = header.offsetTop;
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
// <!----------------------------------------------------FADE-IN LOGO ON HOME BANNER----------------------------------------------------------!>
let LogoCont = document.querySelector('.animate-cont-logo')

window.onload = () => {

    LogoCont.classList.add('show-logo')

    setTimeout(function () {
        opn();
    }, 500);
    setTimeout(function () {
        cls();
    }, 4000);

}


//<!------------------------------------------------------------------SMOOTH SCROLL-----------------------------------------------------------!>
class App {
    constructor() {

        this.heroImages = [...document.querySelectorAll('.hero__images img')];
        this.texts = [...document.querySelectorAll('.text__effect')];
        this._initialize();
        this._render();
    }

    _initialize() {
        this._setInitialStates();
        this._createLenis();
        this._createIntro();
        this._createHero();
        this._createTextAnimation();
        this._createPinnedSection();
    }


    // .text__effect p,
    _setInitialStates() {
        gsap.set('.hero__title span, .fullwidth-image__text', {

            y: 400,                                                 //changeable
            opacity: 0
        })
        gsap.set('.hero__images img', {
            opacity: 0,
            y: gsap.utils.random(2000, 1900)                     //changeable

        })
        gsap.set('.fullwidth-image img', {

            scale: 1.3
        })


    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }

    _createIntro() {
        const tl = gsap.timeline();

        tl.to('.hero__title div', {
            opacity: 1
        }).to('.hero__title span', {
            y: 400,                                           //changeable
            opacity: 1,
            ease: 'expo.out',
            duration: 2,
            stagger: 0.01
        }).to('.hero__images img',
            {
                opacity: 1,
                y: gsap.utils.random(1200, 1100),
                ease: 'power3.out',
                duration: 2,
                stagger: 0.04
            }, '-=1')                                          //changeable(0.5)
    }

    _createHero() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,                           //changeable
            }
        });

        this.heroImages.forEach(image => {
            tl.to(image, {
                ease: 'none',
                yPercent: gsap.utils.random(-100, -50)
            }, 0)
        })

    }

    _createTextAnimation() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.text-block',
                start: 'top center',
                end: 'bottom top+=25%',
                scrub: true,                           //changeable
            }
        });

        this.texts.forEach((text, index) => {
            const overlay = text.querySelector('.text__overlay');

            tl.to(overlay, {
                scaleX: 0
            })
            // .to(content,{
            //     y:0,
            //     opacity: 1,
            //     ease: 'expo.out',
            //     duration: 2,
            //     delay:() => index*0.1
            // },0)
        })
    }
    _createPinnedSection() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.fullwidth-image',
                start: 'top top',
                end: '+=1500',
                scrub: true,
                pin: true                     //changeable
            }
        });

        tl.to('.fullwidth-image__overlay', {

            opacity: 0.7
        }).to('.fullwidth-image', {


            "clip-path": "polygon(0% 0% ,100% 0%,100% 100%, 0% 100%)"
        }, 0).to('.fullwidth-image img', {
            scale: 1
        }, 0).to('.fullwidth-image__text',
            {
                y: 0,
                opacity: 1
            }, 0)
    }
    _render(time) {
        this.lenis.raf(time);
        requestAnimationFrame(this._render.bind(this))
    }

}

new App();

/*<!----------------------------------------------------------------------MODAL---------------------------------------------------------------!>*/
const homeBanner = document.querySelector('.home-banner')
function opn() {

    const element = document.getElementById('my-modal')
    const list = element.classList;
    list.add('my-modal-down')
    homeBanner.classList.add('home-banner-blur')

}
function cls() {

    const element = document.getElementById('my-modal')
    const list = element.classList;
    list.remove('my-modal-down')
    homeBanner.classList.remove('home-banner-blur')
}