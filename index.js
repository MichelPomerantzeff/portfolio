// Drop Sidebar
const sidebar = document.querySelector(".sidebar")
const menuBtn = document.querySelector(".mobile-menu")
const menuImage = document.querySelector(".mobile-menu img");

menuBtn.addEventListener("click", () => {
    if(sidebar.classList.value.includes("hidden")) {
        sidebar.classList.remove('hidden')
        sidebar.classList.add('show')
        menuImage.src = `./images/svg/ham-menu-close.svg`;
    } else {
        sidebar.classList.remove('show')
        sidebar.classList.add('hidden')
        menuImage.src = `./images/svg/ham-menu.svg`;
    }
})


// Scroll to Home section
const topbarLogo = document.querySelector(".topbar-logo-container")
const sidebarToHome = document.querySelector(".sidebar-navigate-to-home")
const toHomeBtnTopbar = document.querySelector(".to-home")
const toHomeBtn = document.querySelector(".toHome")
const homeContainer = document.querySelector(".home")

toHomeBtn.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
sidebarToHome.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
    sidebar.classList.remove('show')
    sidebar.classList.add('hidden')
    menuImage.src = `./images/svg/ham-menu.svg`;
})
toHomeBtnTopbar.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
topbarLogo.addEventListener("click", () => {
    homeContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll to About section
const topbarAbout = document.querySelector(".to-about")
const sidebarToAbout = document.querySelector(".sidebar-navigate-to-about")
const aboutBtn = document.querySelector(".toAbout")
const aboutContainer = document.querySelector(".about")
const interests = document.querySelector("#interests")
const downArrow = document.querySelector(".down-arrow")

aboutBtn.addEventListener("click", () => {
    aboutContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
sidebarToAbout.addEventListener("click", () => {
    aboutContainer.scrollIntoView({ behavior: "smooth", block: "start" })
    sidebar.classList.remove('show')
    sidebar.classList.add('hidden')
    menuImage.src = `./images/svg/ham-menu.svg`;
})
downArrow.addEventListener("click", () => {
    aboutContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})

topbarAbout.addEventListener("click", () => { 
    aboutContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll to Projects section
const topbarProjects = document.querySelector(".to-projects")
const sidebarToProjects = document.querySelector(".sidebar-navigate-to-projects")
const btnProjects = document.querySelector(".toProjects")
const projectsContainer = document.querySelector(".projects")

btnProjects.addEventListener("click", () => {
    projectsContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
sidebarToProjects.addEventListener("click", () => {
    projectsContainer.scrollIntoView({ behavior: "smooth", block: "start" })
    sidebar.classList.remove('show')
    sidebar.classList.add('hidden')
    menuImage.src = `./images/svg/ham-menu.svg`;
})
topbarProjects.addEventListener("click", () => {
    projectsContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll to Contact section
const topbarContact = document.querySelector(".to-contact")
const sidebarToContact = document.querySelector(".sidebar-navigate-to-contact")
const btnContact = document.querySelector(".toContact")
const contactContainer = document.querySelector(".contact")

btnContact.addEventListener("click", () => {
    contactContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
sidebarToContact.addEventListener("click", () => {
    contactContainer.scrollIntoView({ behavior: "smooth", block: "start" })
    sidebar.classList.remove('show')
    sidebar.classList.add('hidden')
    menuImage.src = `./images/svg/ham-menu.svg`;
})
topbarContact.addEventListener("click", () => {
    contactContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll page to top
const home = document.querySelector(".home")
const upArrow = document.querySelector(".upArrow")
const homeBtn = document.querySelector(".homeBtn")