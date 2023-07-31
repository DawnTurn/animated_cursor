const body = document.querySelector("body");
const light = document.querySelector(".sun");
const dark = document.querySelector(".moon");
const mouse = document.querySelector('.cursor')
const navLinks = document.querySelectorAll('.nav-links li a')
const theme = localStorage.getItem('theme')
const image = document.querySelector('.gray')

const reload = () => {
  if (theme === "light-mode") {
    body.classList.add("light");
  }
};

reload();

light.addEventListener("click", () => {
  body.classList.add("light");
  light.style.animation = "";
  dark.style.animation = "move .7s .05s forwards";
    localStorage.setItem("theme", "light-mode");
});

dark.addEventListener("click", () => {
  body.classList.remove("light");
  dark.style.animation = "";
  light.style.animation = "move .7s .05s forwards";
  localStorage.setItem('theme', 'dark-mode')
});

window.addEventListener('mousemove', cursor)

function cursor(e){
    mouse.style.top = e.pageY + 'px'
    mouse.style.left = e.pageX + 'px'
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouse.classList.add('link-grow')
        link.classList.add('hovered-links')
    })
    link.addEventListener('mouseleave', () => {
        mouse.classList.remove('link-grow')
        link.classList.remove('hovered-links')
    })
})

image.addEventListener('mouseover', () => {
    mouse.classList.add('expand')
})

image.addEventListener('mouseleave', () => {
    mouse.classList.remove('expand')
})