// DOM elements

const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");

const lightModeSwitch = document.querySelector(".switch-mode");
const root = document.querySelector(":root");

const header = document.querySelector("header");
const navBtns = document.querySelectorAll("nav .btn-icon-s");
const returnHomeBtn = document.querySelector("nav .btn-home");
const home = document.querySelector("#home");
const homeBtns = home.querySelectorAll(".btn-circle");
const main = document.querySelector("main");
const sections = document.querySelectorAll(".section");

const careerTitles = document.querySelectorAll(".career-title");
const careerTexts = document.querySelectorAll(".career-text");

const projectsBtnsContainer = document.querySelector(".btns");
const projectsBtns = projectsBtnsContainer.querySelectorAll("button");
const btnsMore = document.querySelectorAll(".btn-icon-more");
const projects = document.querySelectorAll(".project");

// buttons and links - focus blur

buttons.forEach(btn => btn.addEventListener("click", () => {
    btn.blur();
}));

links.forEach(link => link.addEventListener("click", () => {
    link.blur();
}));

// light-mode 

lightModeSwitch.addEventListener("click", () => {
    lightModeSwitch.classList.toggle("dark-mode");
    root.classList.toggle("dark-mode");
});

// Navigation

homeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        home.classList.add("narrowed");
        btn.classList.add("active");
        header.classList.add("narrowed");
        main.classList.add("active");
    });
});

returnHomeBtn.addEventListener("click", () => {
    home.classList.remove("narrowed");
    homeBtns.forEach(btn => btn.classList.remove("active"));
    header.classList.remove("narrowed");
    main.classList.remove("active");
});

// Change nav buttons' display when corresponding section on screen (works for scroll and for click)

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
}

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry=> {
        if (!entry.isIntersecting) {
            navBtns.forEach(btn=> {
                if (btn.classList[1] === entry.target.id) {
                    btn.classList.remove("active");
                }
            });
        } else {
            navBtns.forEach(btn=> {
                if (btn.classList[1] === entry.target.id) {
                    btn.classList.add("active");
                    console.log(btn);
                }
            });
        }
    });
}, options);


sections.forEach(section => observer.observe(section));

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
    });
});