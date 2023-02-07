// Navbar
let header = document.querySelector('header');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector(".menuToggle");


menuToggle.onclick= function(){
    header.classList.toggle('open');
}

// typing animation ///////////
var typed = new Typed('.typing',{
    strings: [" ","IT IS THE DESIGN AND EXCEUTION  <br> OF LETTERING WITH  A PEN INK BRUSH, <br> OR OTHER WRITING MATERIALS"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});


/*======= SHOW SCROLL UP ===== */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show scroll class to
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

