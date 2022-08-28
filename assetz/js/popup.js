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



    $(document).ready(function() {
        $(".gallery").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
    });
    

   