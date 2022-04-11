const navtoglle= document.querySelector(".toggle_nav");
const navmenu= document.querySelector(".menu");
 

navtoglle.addEventListener("click", () =>{
    navmenu.classList.toggle("menu_visible");
});

