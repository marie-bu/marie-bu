// DOM elements

const lightModeBtn = document.querySelector(".btn-switch-light");
const darkModeBtn = document.querySelector(".btn-switch-dark");
const root = document.querySelector(":root");
const contactMaltBtn = document.querySelector("#malt-btn");

const nav = document.querySelector("nav");
const navBtns = nav.querySelectorAll(".btn-icon-s");
const header = document.querySelector("header");
const home = document.querySelector("section#home");
const homeBtns = home.querySelectorAll(".btn-circle");
const sections = document.querySelectorAll("section");

const careerTitles = document.querySelectorAll(".career-title");
const careerTexts = document.querySelectorAll(".career-text");

const projectsBtnsContainer = document.querySelector(".projects-btns");
const projectsBtns = projectsBtnsContainer.querySelectorAll("button");
const btnsMore = document.querySelectorAll(".btn-icon-more");
const projects = document.querySelectorAll(".project");

// light-mode 

lightModeBtn.addEventListener("click", ()=>{
    lightModeBtn.classList.add("active");
    darkModeBtn.classList.remove("active");
    root.classList.add("light-mode");
    contactMaltBtn.classList.add("light-mode");
});

darkModeBtn.addEventListener("click", ()=>{
    darkModeBtn.classList.add("active");
    lightModeBtn.classList.remove("active");
    root.classList.remove("light-mode");
    contactMaltBtn.classList.remove("light-mode");
})

// Navigation

navBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if (btn.classList[0] === "home")
            header.classList.remove("active");
        sections.forEach((section)=>{
            if (section.id === btn.classList[0]) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});

homeBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        header.classList.add("active");
        sections.forEach((section)=>{
            if (section.id === btn.classList[0]) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});

// Career 

careerTitles.forEach((title) => {
    title.addEventListener("click", () => {
        careerTitles.forEach(t => t.classList.remove("active"));
        careerTexts.forEach((text) => {
            if (text.classList[0] === title.classList[0]) {
                text.classList.remove("hidden");
                title.classList.add("active");
            } else {
                text.classList.add("hidden");
            }
        });
    });
});

// Portfolio

projectsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        projectsBtns.forEach(b => b.classList.remove("active"));
        projects.forEach((project) => {
            if (project.classList[0] === btn.classList[0]) {
                project.classList.add("active");
                btn.classList.add("active");
            } else {
                project.classList.remove("active");
                project.querySelector(".project-img").classList.remove("hidden");
            }
        });
    });
});

btnsMore.forEach((btn) => {
    btn.addEventListener("click", () => {
        let image = btn.parentNode.previousElementSibling;
        image.classList.toggle("hidden");
        btn.blur();
    });
});