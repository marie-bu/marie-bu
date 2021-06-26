// DOM elements

const landingSection = document.querySelector("#navigation");
const landingBtns = landingSection.querySelectorAll(".btn-circle");
const sections = document.querySelectorAll(".section");

const careerTitles = document.querySelectorAll(".career-title");
const careerTexts = document.querySelectorAll(".career-text");

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