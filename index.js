// Scroll to Home section
const topbarLogo = document.querySelector(".topbar-logo-container")
const toHomeBtnTopbar = document.querySelector(".to-home")
const toHomeBtn = document.querySelector(".toHome")
const homeContainer = document.querySelector(".home")

toHomeBtn.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
toHomeBtnTopbar.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
topbarLogo.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll to About section
const topbarAbout = document.querySelector(".to-about")
const aboutBtn = document.querySelector(".toAbout")
const aboutBox = document.querySelector(".about")
const interests = document.querySelector("#interests")
const downArrow = document.querySelector(".down-arrow")

aboutBtn.addEventListener("click", () => {
    aboutBox.scrollIntoView({ behavior: "smooth", block: "start" })
})
downArrow.addEventListener("click", () => {
    aboutBox.scrollIntoView({ behavior: "smooth", block: "start" })
})

topbarAbout.addEventListener("click", () => { aboutBox.scrollIntoView({ behavior: "smooth", block: "start" })})


// Scroll to Projects section
const topbarProjects = document.querySelector(".to-projects")
const btnProjects = document.querySelector(".toProjects")
const projectContainer = document.querySelector(".projects")

btnProjects.addEventListener("click", () => {
    projectContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
topbarProjects.addEventListener("click", () => {
    projectContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll to Contact section
const topbarContact = document.querySelector(".to-contact")
const btnContact = document.querySelector(".toContact")
const contact = document.querySelector(".contact")

btnContact.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" })
})
topbarContact.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll page to top
const home = document.querySelector(".home")
const upArrow = document.querySelector(".upArrow")
const homeBtn = document.querySelector(".homeBtn")

upArrow.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "start" })
})
homeBtn.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "start" })
})