// DOM elements

const landingSection = document.querySelector("#navigation");
const landingBtns = landingSection.querySelectorAll(".btn-circle");
const sections = document.querySelectorAll(".section");

const careerTitles = document.querySelectorAll(".career-title");
const careerTexts = document.querySelectorAll(".career-text");

const btnsMore = document.querySelectorAll(".btn-icon-more");
const projects = document.querySelectorAll(".project");

// Landing page navigation

landingBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        landingSection.style.display = "none";
        sections.forEach((section)=>{
            if (section.id == btn.classList[0]) {
                section.classList.add("section-active");
            }
        });
    });
});

// Career 

careerTitles.forEach((title) => {
    title.addEventListener("click", () => {
        careerTitles.forEach(t => t.classList.remove("career-title-active"));
        careerTexts.forEach((text) => {
            if (text.classList[0] === title.classList[0]) {
                text.classList.remove("career-text-hidden");
                title.classList.add("career-title-active");
                console.log(title);
            } else {
                text.classList.add("career-text-hidden");
            }
        });
    });
});

// Portfolio

projects.forEach((project)=> {
    project.addEventListener("mouseover", ()=> {
        let main = project.querySelector(".project-main");
        let details = project.querySelector(".project-details");
        console.log(main + details);
        main.classList.add("project-main-hidden");
        details.classList.add("project-details-active");
    })
    project.addEventListener("mouseout", ()=> {
        let main = project.querySelector(".project-main");
        let details = project.querySelector(".project-details");
        console.log(main + details);
        main.classList.remove("project-main-hidden");
        details.classList.remove("project-details-active");
    })
})

btnsMore.forEach((btn) => {
    btn.addEventListener("click", () => {
        let main = btn.parentNode.previousElementSibling.previousElementSibling;
        let details = btn.parentNode.previousElementSibling;
        main.classList.toggle("project-main-hidden");
        details.classList.toggle("project-details-active");
        btn.blur();
    });
});