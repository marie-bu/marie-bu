// DOM elements

const landingSection = document.querySelector("#navigation");
const landingBtns = landingSection.querySelectorAll(".btn-circle");
const sections = document.querySelectorAll(".section");

// Landing page navigation

landingBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        landingSection.style.display = "none";
        sections.forEach((section)=>{
            if (section.id == btn.classList[0]) {
                section.classList.add("section-active");
            }
        })
    })
})