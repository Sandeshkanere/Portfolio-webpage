/* --------------------------------------------- */
/* -------------- Navbar Dropdown -------------- */
/* --------------------------------------------- */

$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
    });
});

/* --------------------------------------------- */
/* ------------------- FAQ --------------------- */
/* --------------------------------------------- */

$(document).ready(function(){
$(".Faq-head").click(function(){
$(".Faq-desc").slideToggle("slow");
});
});