const navBtn = document.querySelector(".btn"),
navUl = document.querySelector("ul"),
menu = document.querySelector(".menu")
navBtn.addEventListener("click", function(){
    navUl.classList.toggle("hight")
    menu.classList.toggle('fa-xmark')

    navUl.addEventListener("click", () =>{
        navUl.classList.remove('hight')
        menu.classList.remove("fa-xmark")
    })
})