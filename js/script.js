// =============================
// A TO Z INDUSTRIES
// script.js
// =============================

// Current Year
const year=document.getElementById("year");

if(year){
year.innerHTML=new Date().getFullYear();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// Navbar Shadow

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(navbar){

if(window.scrollY>50){

navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.20)";

}else{

navbar.style.boxShadow="none";

}

}

});
// Product Search

const search=document.getElementById("searchBox");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let cards=document.querySelectorAll(".product-card");

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

if(text.indexOf(value)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// Counter Animation

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+increment;

setTimeout(updateCounter,10);

}else{

counter.innerText=target;

}

};

updateCounter();

});

// Card Hover Effect

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
// WhatsApp Enquiry

function whatsappEnquiry(product){

let message="Hello A TO Z INDUSTRIES,%0A%0AI want enquiry for: "+product;

window.open(
"https://wa.me/919461687145?text="+message,
"_blank"
);

}

// Call Button

function callNow(){

window.location.href="tel:9461687145";

}

// Contact Form

const contact=document.getElementById("contactForm");

if(contact){

contact.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your enquiry has been submitted.");

contact.reset();

});

}

// Newsletter

const newsletter=document.getElementById("newsletter");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for subscribing!");

newsletter.reset();

});

}

// Back To Top

const topBtn=document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

console.log("A TO Z INDUSTRIES Website Loaded Successfully.");
