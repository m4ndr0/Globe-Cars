const slideMenuContainer = document.getElementById("slide-menu-container")
const menuIcon = document.getElementById("menu-icon")

//OPEN SLIDE MENU

menuIcon.addEventListener("click", function() {
    slideMenuContainer.style.display = "flex"
})

//CLOSE SLIDE MENU WHEN CLICKING <A> TAG OR OUT SIDE MENU DIV

window.addEventListener('click', function(e) {
    if (slideMenuContainer.contains(e.target)) {
        slideMenuContainer.classList.remove("scale-up-hor-right")
        slideMenuContainer.classList.add("scale-down-hor-right")
        menuIcon.style.color = "white"
        return
    } else if (menuIcon.contains(e.target)) {
        menuIcon.style.color = "trasparent"
        slideMenuContainer.classList.remove("scale-down-hor-right")
        slideMenuContainer.classList.add("scale-up-hor-right")
    } else {
        slideMenuContainer.classList.remove("scale-up-hor-right")
        slideMenuContainer.classList.add("scale-down-hor-right")
        menuIcon.style.color = "white"
    }
})

//SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});