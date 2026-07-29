// A TO Z INDUSTRIES

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="0.8s ease";

observer.observe(card);

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";

}else{

header.style.boxShadow="0 3px 15px rgba(0,0,0,.2)";

}

});
