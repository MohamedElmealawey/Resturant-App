
var swiper = new Swiper(".home-slider", {
    spaceBetween: 180,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0: {
            slidesPerView:1,
        },
        640: {
            slidesPerView:2,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});

let bar=document.querySelector("#menu-bars");
let lis=document.querySelector(".navbar");

bar.onclick=()=>{
    if(bar.classList.contains("fa-bars")){
        bar.classList.toggle("fa-times");
        lis.classList.toggle("active");
    }else{
        bar.classList.remove("fa-times");
        lis.classList.remove("active");
    }
}

let section=document.querySelectorAll("section");
let navLinks=document.querySelectorAll(".navbar a");
console.log(section,navLinks)

window.onscroll=()=>{
    bar.classList.remove("fa-times");
    lis.classList.remove("active");

    let maxHeight=window.document.body.scrollHeight - window.innerHeight;
    let percentage=((window.scrollY)/maxHeight) * 100;
    document.querySelector(".scroll-indicator").style.width=percentage + '%';

    section.forEach(sec=>{
        let top=window.scrollY;
        let height=sec.offsetHeight;
        let offset=sec.offsetTop - 150;
        let id=sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

let searchForm=document.querySelector("#search-form");
let searchIcon=document.querySelector("#search-icon");
let closeSearch=document.querySelector("#close");

searchIcon.onclick=()=>{
    searchForm.classList.toggle("active");
}
closeSearch.onclick=()=>{
    searchForm.classList.remove("active");
}

