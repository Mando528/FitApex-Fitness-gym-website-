let body=document.querySelector("body");
let homePage = document.querySelector("#home");
let header = document.querySelector(".header");
let logo = document.querySelector("#logo");
let middleLetter = document.querySelector("#middle");
const nav = document.querySelector("nav");
let menu = document.querySelector("#menuBar");
let closeBtn = document.querySelector("#close");
let link = document.querySelectorAll("nav a");
let homeLink = document.querySelector("#honeLink");
let sections = document.querySelectorAll(".section");



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function scrolling(){
    header.classList.add("sticky");
    if(this.scrollY<="0"){
        logo.style.color="var(--clr-white)";
        middleLetter.style.color="var(--clr-primary-2)";
        if(nav.classList.contains("show")){
            header.classList.add("sticky");
            logo.style.color="var(--clr-primary-2)";
            middleLetter.style.color="var(--clr-white)";
        }
        else{
            header.classList.remove("sticky");
        }
    }
    else{
        logo.style.color="var(--clr-primary-2)";
        middleLetter.style.color="var(--clr-white)";
    }
}
//This is the worst thing i have ever done in my whole life
//For the love of god i think i am about to puke
function active(){
    if(window.innerWidth>="1500"){
        if(scrollY>=0){
            document.querySelector(".active").classList.remove("active")
            link[0].classList.add("active");
        }
        if(scrollY>=860.5556030273430){
            document.querySelector(".active").classList.remove("active")
            link[1].classList.add("active");
        }
        if(scrollY>=1727.77783203125){
            document.querySelector(".active").classList.remove("active")
            link[2].classList.add("active");
        }
        if(scrollY>=2354.444580078125){
            document.querySelector(".active").classList.remove("active")
            link[3].classList.add("active");
        }
        if(scrollY>=3834.444580078125){
            document.querySelector(".active").classList.remove("active")
            link[4].classList.add("active");
        }
        if(scrollY>=7080){
            document.querySelector(".active").classList.remove("active")
            link[5].classList.add("active");
        }
    }

    if(window.innerWidth>="1178"){
        if(scrollY>=0){
            document.querySelector(".active").classList.remove("active")
            link[0].classList.add("active");
        }
        if(scrollY>=860.5556030273430){
            document.querySelector(".active").classList.remove("active")
            link[1].classList.add("active");
        }
        if(scrollY>=1753.3333740234375){
            document.querySelector(".active").classList.remove("active")
            link[2].classList.add("active");
        }
        if(scrollY>=2985.5556640625){
            document.querySelector(".active").classList.remove("active")
            link[3].classList.add("active");
        }
        if(scrollY>=4222.22216796875){
            document.querySelector(".active").classList.remove("active")
            link[4].classList.add("active");
        }
        if(scrollY>=7427.77783203125){
            document.querySelector(".active").classList.remove("active")
            link[5].classList.add("active");
        }
    }

    if(window.innerWidth<="1178"){
        if(scrollY>=0){
            document.querySelector(".active").classList.remove("active")
            link[0].classList.add("active");
        }
        if(scrollY>=860.5556030273430){
            document.querySelector(".active").classList.remove("active")
            link[1].classList.add("active");
        }
        if(scrollY>=2080.888916015620){
            document.querySelector(".active").classList.remove("active")
            link[2].classList.add("active");
        }
        if(scrollY>=3330.444580078120){
            document.querySelector(".active").classList.remove("active")
            link[3].classList.add("active");
        }
        if(scrollY>=5570.44482421870){
            document.querySelector(".active").classList.remove("active")
            link[4].classList.add("active");
        }
        if(scrollY>=8810.7783208120){
            document.querySelector(".active").classList.remove("active")
            link[5].classList.add("active");
        }
    }
    if(window.innerWidth<="760"){
        if(scrollY>=0){
            document.querySelector(".active").classList.remove("active")
            link[0].classList.add("active");
        }
        if(scrollY>=860.5556030273430){
            document.querySelector(".active").classList.remove("active")
            link[1].classList.add("active");
        }
        if(scrollY>=2080.888916015620){
            document.querySelector(".active").classList.remove("active")
            link[2].classList.add("active");
        }
        if(scrollY>=4313.33349609375){
            document.querySelector(".active").classList.remove("active")
            link[3].classList.add("active");
        }
        if(scrollY>=6572.22216796875){
            document.querySelector(".active").classList.remove("active")
            link[4].classList.add("active");
        }
        if(scrollY>=11965.5556640625){
            document.querySelector(".active").classList.remove("active")
            link[5].classList.add("active");
        }
    }
}
window.addEventListener("scroll",()=>{
    scrolling();
    active();
    console.log(scrollY);
});
function openMenu(){
    nav.classList.add("show");
    menu.style.display="none";
    closeBtn.style.display="flex";
    nav.style.position="fixed";
    nav.style.top="60px";
    logo.style.fontSize="2.9em";
}
function closeMenu(){
    nav.classList.remove("show");
    closeBtn.style.display="none";
    menu.style.display="flex";
    logo.style.fontSize="4.5em";
}
menu.addEventListener("click",()=>{
    openMenu()
    scrolling();
})
closeBtn.addEventListener("click",()=>{
    if(this.scrollY<="0"){
        header.classList.remove("sticky");
        logo.style.color="var(--clr-white)";
        middleLetter.style.color="var(--clr-primary-2)";
    }
    closeMenu();
})
link.forEach(e=>{
    e.addEventListener("click",()=>{
        closeMenu();
        document.querySelector(".active").classList.remove("active");
        e.classList.add("active");
    })
})

