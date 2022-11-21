


function changeColor(){
    var scrollValue = window.scrollY;
    var background = document.getElementById("background")
    var bean = document.getElementById("bean")
    var bean2 = document.getElementById("bean2")
    if (scrollValue <= 400) {
        background.classList.add("background1")
        background.classList.remove('background2')
        bean.classList.add("size1")
        bean.classList.remove("size2")


    }
    if (scrollValue > 400 && scrollValue < 2100){
        background.classList.add("background2")
        background.classList.remove('background1')
        background.classList.remove('background3')
        bean.classList.add("size2")
        bean.classList.remove("size1")
        bean2.classList.add("size3")
        bean2.classList.remove("size4")

    } if (scrollValue > 800){
        bean2.classList.add("size4")
        bean2.classList.remove("size3")
    }
    if (scrollValue >= 2100){
        background.classList.add("background3")
        background.classList.remove('background2')
}
}




function changeOpacity(){
    var scrollValue = window.scrollY;
    var gallery = document.getElementById("gallery")
    if (scrollValue > 45){
        gallery.classList.add("opacity")
        gallery.classList.remove("opacity1")

    }  else{
        gallery.classList.add("opacity1")
        gallery.classList.remove("opacity")
    }

}
function changemargin(){
    var scrollValue = window.scrollY;
    var gallery = document.getElementById("gallery")
    if (scrollValue > 0){
        gallery.style.marginBottom = "4.8%";
    }

}
/**function changeheadwidth(){
    var scrollValue = window.scrollY;
    var background = document.getElementById("background")
    if (scrollValue > 400){
        background.classList.add("background2")
        background.classList.remove('background1')
    } else{
        background.classList.add("background1")
        background.classList.remove('background2')
    }
} */


window.addEventListener('scroll',changeColor);
window.addEventListener('scroll',changeOpacity);

/**window.addEventListener('scroll',changeheadwidth);*/
