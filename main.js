var btn = document.querySelector('.no')
btn.addEventListener('mouseenter',() =>{
    var randX = Math.floor(Math.random() * 500)
    var randY = Math.floor(Math.random ()* 500)

    btn.style.marginTop = randY +  "px"
    btn.style.marginLeft = randX +  "px"
})