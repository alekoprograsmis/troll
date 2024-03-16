const head = document.querySelector('header');
const btn = document.querySelector(".start");
const btn2 = document.querySelector(".next");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const python = document.querySelector(".python");
const figma = document.querySelector('.figma');
const menu = document.querySelector('.menu-bar');
const closeBar = document.querySelector('.close');
const navBar = document.querySelector('.nav');
const handleMouseover = (color) => {
    head.style.background = color;
};

const handleMouseleave = () => {
    head.style.background = "#2f0272";
};

btn.addEventListener('mouseover', () => handleMouseover("green"));
btn.addEventListener('mouseleave', handleMouseleave);

btn2.addEventListener('mouseover', () => handleMouseover('#e8d804'));
btn2.addEventListener('mouseleave', handleMouseleave);

html.addEventListener('mouseover', () => handleMouseover('orange'));
html.addEventListener('mouseleave', handleMouseleave);

css.addEventListener('mouseover', () => handleMouseover('blue'));
css.addEventListener('mouseleave', handleMouseleave);

js.addEventListener('mouseover', () => handleMouseover('yellow'));
js.addEventListener('mouseleave', handleMouseleave);

python.addEventListener('mouseover', () => handleMouseover('green'));
python.addEventListener('mouseleave', handleMouseleave);

figma.addEventListener('mouseover', () => handleMouseover('red'));
figma.addEventListener('mouseleave', handleMouseleave);

menu.addEventListener("click", () => {
    navBar.classList.add("active");
})

closeBar.addEventListener("click", () => {
    navBar.classList.remove("active");
})

document.addEventListener("click", (e) => {
    if ((!navBar.contains(e.target) && !menu.contains(e.target) && window.innerWidth < 768) || e.target.classList.contains("element")) {
        navBar.classList.remove("active");
    }
})
