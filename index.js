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


// Scroll reveal
window.sr = new ScrollReveal();

sr.reveal('.section-title', { delay: 100, duration: 1000 });

sr.reveal('.aboutDescription', { delay: 100, duration: 1000 });
sr.reveal('.about-profile-image', { delay: 100, duration: 1000 });

sr.reveal('.html', { delay: 500, duration: 1000 });
sr.reveal('.css', { delay: 100, duration: 1000 });
sr.reveal('.javascript', { delay: 300, duration: 1000 });
sr.reveal('.react', { delay: 600, duration: 1000 });
sr.reveal('.redux', { delay: 200, duration: 1000 });
sr.reveal('.bootstrap', { delay: 400, duration: 1000 });
sr.reveal('.restapi', { delay: 600, duration: 1000 });
sr.reveal('.firebase', { delay: 200, duration: 1000 });
sr.reveal('.nodejs', { delay: 400, duration: 1000 });
sr.reveal('.python', { delay: 500, duration: 1000 });
sr.reveal('.git', { delay: 100, duration: 1000 });
sr.reveal('.github', { delay: 300, duration: 1000 });

sr.reveal('.ecommerce', { delay: 100, duration: 1000 });
sr.reveal('.movie-app', { delay: 200, duration: 1000 });
sr.reveal('.linksaver', { delay: 300, duration: 1000 });
sr.reveal('.clock', { delay: 400, duration: 1000 });
sr.reveal('.coming-soon', { delay: 500, duration: 1000 });

sr.reveal('.form-wrapper', { delay: 100, duration: 1000 });