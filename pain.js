


function changeColor(){
    var scrollValue = window.scrollY;
    var background = document.getElementById("background")
    var bean = document.getElementById("bean")
    var secondBrendan = document.getElementById("bean2")
    var link1 = document.getElementById("bean3")
    var link2 = document.getElementById("bean4")
    var link3 = document.getElementById("bean5")


    if (scrollValue <= 400) {
        background.classList.add("background1")
        background.classList.remove('background2')
        bean.classList.add("size1")
        bean.classList.remove("size2")
        link1.classList.remove("size69")
        link2.classList.remove("size70")
        link3.classList.remove("size71")


    }
    if (scrollValue > 400 && scrollValue < 2100){
        background.classList.add("background2")
        background.classList.remove('background1')
        background.classList.remove('background3')
        bean.classList.add("size2")
        bean.classList.remove("size1")
        secondBrendan.classList.add("size3")
        secondBrendan.classList.remove("size4")
        link1.classList.remove("size69")
        link2.classList.remove("size70")
        link3.classList.remove("size71")
        link1.classList.add("sizemid")
        link2.classList.add("sizemid")
        link3.classList.add("sizemid")


    } if (scrollValue > 800){
        bean.classList.add("size2")
        bean.classList.remove("size1")
        secondBrendan.classList.add("size4")
        secondBrendan.classList.remove("size3")
        link1.classList.add("size69")
        link2.classList.add("size70")
        link3.classList.add("size71")
        link1.classList.remove("sizemid")
        link2.classList.remove("sizemid")
        link3.classList.remove("sizemid")
        link1.classList.remove("colorWhite")
        link2.classList.remove("colorWhite")
        link3.classList.remove("colorWhite")
        secondBrendan.classList.remove("colorWhite")


    }
    if (scrollValue >= 1900){
        bean.classList.add("size2")
        bean.classList.remove("size1")
        background.classList.add("background3")
        background.classList.remove('background2')
        link1.classList.add("colorWhite")
        link2.classList.add("colorWhite")
        link3.classList.add("colorWhite")
        secondBrendan.classList.add("colorWhite")
}   if(scrollValue >= 3400){
    link1.classList.remove("colorWhite")
    link2.classList.remove("colorWhite")
    link3.classList.remove("colorWhite")
    secondBrendan.classList.remove("colorWhite")
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
