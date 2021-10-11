// DOM elements

const buttons = document.querySelectorAll("button");
const links = document.querySelectorAll("a");

const lightModeSwitch = document.querySelector(".switch-mode");
const root = document.querySelector(":root");
const maltBtn = document.querySelector("#malt-btn");

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navBtns = nav.querySelectorAll(".btn-stripe");
const returnHomeBtn = document.querySelector("#btn-return-home");
const sections = document.querySelectorAll(".section");
const burgerMenuBtn = document.querySelector("#btn-nav-mobile");

const cv = document.querySelector("#modal-cv");
const openCv = document.querySelector("#open-cv");
const closeCv = document.querySelector("#close-cv");

const careerTitles = document.querySelectorAll(".career-title");
const careerTexts = document.querySelectorAll(".career-text");

const projectModal = document.querySelector("#modal-project");
const closeProject = document.querySelectorAll(".close-project");
const projectsBtns = document.querySelectorAll("figcaption");
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
    maltBtn.classList.toggle("dark-mode");
});

// Navigation

navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.add("active");
        if (screen.width > 985) {
            header.classList.add("hidden");
            nav.classList.add("narrow");
            navBtns.forEach(btn => btn.classList.add("narrow"));
        }
        if (screen.width <= 985) {
            burgerMenuBtn.classList.remove("btn-close", "hidden");
            nav.classList.add("hidden");
        }
    });
});

returnHomeBtn.addEventListener("click", () => {
    header.classList.remove("hidden");
    nav.classList.remove("narrow");
    navBtns.forEach(btn => btn.classList.remove("active", "narrow"));
});

// Navigation small screens 

burgerMenuBtn.addEventListener("click", () => {
    burgerMenuBtn.classList.toggle("btn-close");
    nav.classList.toggle("hidden");
});


// Change nav buttons' display when corresponding section on screen (added for scroll)

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

const observer = new IntersectionObserver(function (entries) {
    if (screen.width <= 985) {
        sections.forEach(section => section.classList.add("active"));
        return
    } else {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("active");
                navBtns.forEach(btn => {
                    if (btn.classList[1] === entry.target.id) {
                        btn.classList.remove("active");
                    }
                });
            } else {
                entry.target.classList.add("active");
                navBtns.forEach(btn => {
                    if (btn.classList[1] === entry.target.id && nav.classList.contains("narrow")) {
                        btn.classList.add("active");
                    }
                });
            }
        });
    }
}, options);


sections.forEach(section => observer.observe(section));

// Modal CV

openCv.addEventListener("click", () => {
    cv.style.display = "block";
});

closeCv.addEventListener("click", () => {
    cv.style.display = null;
});

// Change texts career 

careerTitles.forEach((title) => {
    title.addEventListener("click", () => {
        careerTitles.forEach(t => t.classList.remove("active"));
        careerTexts.forEach((text) => {
            if (text.classList[0] === title.classList[0]) {
                text.classList.add("active");
                title.classList.add("active");
            } else {
                text.classList.remove("active");
            }
        });
    });
});

// Modal portfolio

projectsBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (screen.width > 985) {
            projectModal.style.display = "flex"; 
        } else if (screen.width <= 985) {
            projectModal.style.display = "block"; 
        }
        projects.forEach((project) => {
            if (project.classList[0] === btn.classList[0]) {
                project.classList.add("active");
            } else {
                project.classList.remove("active");
            }
        });
    });
});

closeProject.forEach((btn) => {
    btn.addEventListener("click", () => {
        projectModal.style.display = null;
    });
});

// Skills

const skillsPercentages = document.querySelectorAll('.skills-groups li span');
const skillsSection = document.querySelector("#skills");

skillsPercentages.forEach((skill)=>{

    let percentage = skill.className;
    let count = 0;

    let runNumbers = setInterval(counting, 20);

    function counting() {
        if (count == percentage) {
            clearInterval(runNumbers);
        } else if (count<percentage && skillsSection.className=="section active") {
            count+=1;
            skill.innerHTML=count+'%';
            skill.previousElementSibling.style.width=count+"px";
        }
    }
});


const skillsMore = document.querySelector(".skills-more");
const skillsToCome = document.querySelector(".skills-to-come");

skillsMore.addEventListener("mouseover", ()=>{
    skillsToCome.classList.add("active");
});
skillsMore.addEventListener("mouseout", ()=>{
    skillsToCome.classList.remove("active");
});
skillsMore.addEventListener("click", ()=>{
    skillsToCome.classList.toggle("active");
});