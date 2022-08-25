const btn_sub_close = document.getElementById("subs-close");
const blr = document.getElementById("mncntr");
const mncntr = document.getElementById("mncntr");

//popupfadein

setTimeout (function(){
    mncntr.classList.add("ppupblr")
    document.getElementsByClassName("popup-main")[0].style.display = "flex"
}, 5000);

btn_sub_close.addEventListener("click", () => {
    document.getElementsByClassName("popup-main")[0].style.display = "none"
    blr.classList.remove("ppupblr");});

   