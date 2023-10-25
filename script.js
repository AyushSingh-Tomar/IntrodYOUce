

// <!-----------------------------------------------------------------------NAV BAR-----------------------------------------------------------!>
const toggleBtn = document.querySelector('.home-navbar-toggle-btn')
const toggleBtnIcon = document.querySelector('.home-navbar-toggle-btn i')
const dropDownMenu = document.querySelector('.home-dropdown-menu')

toggleBtn.onclick = function () {
    homeBanner = this.getElementsByClassName('home-banner')
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
    homeBanner = this.getElementsByClassName('home-banner')
    dropDownMenu1.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon1.classList = isOpen
        ? 'bx bx-x'
        : 'bx bx-menu'
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
        let top = window.scrollY +150;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        
        if (top >= offset && top < offset + height) {
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
      gsap.set('.hero__title span, .fullwidth-image__text',{

        y: 37,                                                 //changeable
        opacity: 0                                            
      })
      gsap.set('.hero__images img',{
        opacity: 0,
        y: gsap.utils.random(1600, 1500)                     //changeable
       
      })
      gsap.set('.fullwidth-image img',{
 
        scale: 1.3
      })
      
       
   }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }

    _createIntro()
    {
       const tl = gsap.timeline();

       tl.to('.hero__title div',{
        opacity : 1
       }).to('.hero__title span',{
        y: 37,                                           //changeable
        opacity: 1,
        ease: 'expo.out',
        duration: 2,
        stagger: 0.01
       }).to('.hero__images img',
       {
        opacity: 1,
        y: gsap.utils.random(1000, 900) ,
        ease: 'power3.out',
        duration: 2,
        stagger: 0.04
       },'-=1')                                          //changeable(0.5)
    }

    _createHero()
    {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top', 
                end:'bottom top',  
                scrub:true,                           //changeable
            }
        });

        this.heroImages.forEach(image =>{
            tl.to(image, {
                ease: 'none',
                yPercent: gsap.utils.random(-100, -50)
            },0)
        })

    }

    _createTextAnimation()
    {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.text-block',
                start: 'top center', 
                end:'bottom top+=25%',  
                scrub:true,                           //changeable
            }
        });

        this.texts.forEach((text, index) =>{
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
    _createPinnedSection()
    {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.fullwidth-image',
                start: 'top top', 
                end:'+=1500',  
                scrub:true,      
                pin: true                     //changeable
            }
        });

        tl.to('.fullwidth-image__overlay',{

            opacity: 0.7
        }).to('.fullwidth-image',{

        
            "clip-path": "polygon(0% 0% ,100% 0%,100% 100%, 0% 100%)"
        },0).to('.fullwidth-image img',{
            scale:1
        },0).to('.fullwidth-image__text',
        {
            y:0,
            opacity:1
        },0)
    }
    _render(time) {
        this.lenis.raf(time);
        requestAnimationFrame(this._render.bind(this))
    }

}

new App();