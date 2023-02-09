// Navbar
let header = document.querySelector('header');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector(".menuToggle");


menuToggle.onclick= function(){
    header.classList.toggle('open');
}


/*======= SHOW SCROLL UP ===== */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, add the show scroll class to
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

