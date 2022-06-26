// Scroll to About section
const topbarAbout = document.querySelector(".topbarAbout")
const aboutBtn = document.querySelector(".toAbout")
const aboutBox = document.querySelector(".aboutBox")

aboutBtn.addEventListener("click", () => {
    aboutBox.scrollIntoView({ behavior: "smooth", block: "center" })
})
topbarAbout.addEventListener("click", () => {
    aboutBox.scrollIntoView({ behavior: "smooth", block: "center" })
})


// Scroll to Skilss section
const topbarSkill = document.querySelector(".topbarSkill")
const btnSkill = document.querySelector(".toSkill")
const skillsBox = document.querySelector(".skillsBox")

btnSkill.addEventListener("click", () => {
    skillsBox.scrollIntoView({ behavior: "smooth", block: "center" })
})
topbarSkill.addEventListener("click", () => {
    skillsBox.scrollIntoView({ behavior: "smooth", block: "center" })
})


// Scroll to Projects section
const topbarProject = document.querySelector(".topbarProject")
const btnProject = document.querySelector(".toProject")
const projectContainer = document.querySelector(".projectContainer")

btnProject.addEventListener("click", () => {
    projectContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})
topbarProject.addEventListener("click", () => {
    projectContainer.scrollIntoView({ behavior: "smooth", block: "start" })
})


// Scroll to Contact section
const topbarContact = document.querySelector(".topbarContact")
const btnContact = document.querySelector(".toContact")
const contact = document.querySelector(".contact")

btnContact.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "center" })
})
topbarContact.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "center" })
})



// Change HOME BUTTON to from MP to HOME icon and vise-versa on mouse hover
const homeBtn = document.querySelector('#homeBtn')
const house = document.querySelector('.house')
const initials = document.querySelector('.initials')

homeBtn.addEventListener("mouseenter", () => {
    initials.classList.add("hide")
    house.classList.add("fa-house")
})

homeBtn.addEventListener("mouseleave", () => {
    house.classList.remove("fa-house")
    initials.classList.remove("hide")
})



// Scroll the page to the very bottom
const home = document.querySelector(".home")
const upArrow = document.querySelector(".upArrow")

upArrow.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "center" })
})
homeBtn.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "center" })
})


// Scroll the page to the very top
const footer = document.querySelector("footer")
const down = document.querySelector(".down")

down.addEventListener("click", () => {
    footer.scrollIntoView({ behavior: "smooth", block: "center" })
})