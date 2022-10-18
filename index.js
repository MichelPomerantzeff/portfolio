// Scroll to About section
const topbarAbout = document.querySelector(".topbarAbout")
const aboutBtn = document.querySelector(".toAbout")
const aboutBox = document.querySelector(".aboutBox")
const toggle = document.querySelector(".toggle")
const interests = document.querySelector("#interests")

aboutBtn.addEventListener("click", () => {
    aboutBox.scrollIntoView({ behavior: "smooth", block: "center" })
})
topbarAbout.addEventListener("click", () => {
    aboutBox.scrollIntoView({ behavior: "smooth", block: "center" })
})
toggle.addEventListener("click", () => {
    if(toggle.innerHTML === "show more"){
        toggle.innerHTML = "show less"
        interests.classList.remove('interests')
    } else {
        toggle.innerHTML = "show more"
        interests.classList.add('interests')
    }
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
const contact = document.querySelector(".contact-container")

btnContact.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "center" })
})
topbarContact.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth", block: "center" })
})


// Scroll page to bottom
const footer = document.querySelector("footer")
const downArrow = document.querySelector(".downArrow")

downArrow.addEventListener("click", () => {
    footer.scrollIntoView({ behavior: "smooth", block: "center" })
})


// Scroll page to top
const home = document.querySelector(".home")
const upArrow = document.querySelector(".upArrow")
const homeBtn = document.querySelector(".homeBtn")

upArrow.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "center" })
})
homeBtn.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth", block: "center" })
})
