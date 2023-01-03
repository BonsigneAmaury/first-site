startImageTransition();
  
function startImageTransition() {

    var images = document.getElementsByClassName("test");


    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }


    var cur = images.length - 1;


    setInterval(changeImage, 7000);


    async function changeImage() {


        var nextImage = (1 + cur) % images.length;


        images[cur].style.zIndex = 2;
        images[nextImage].style.zIndex = 1;


        await transition();


        images[cur].style.zIndex = 1;

        images[nextImage].style.zIndex = 2


        images[cur].style.opacity = 1;


        cur = nextImage;
    }

    function transition() {
        return new Promise(function (resolve, reject) {


            var del = 0.01;

            var id = setInterval(changeOpacity, 10);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }
}
function afficher_menu() {
    var menu = document.querySelector(".menu_cacher");
    // if(menu.style.display == "none") {
    //   menu.style.display = "block";
    //   menu.classList.add("active");
    // } else {
    //   menu.style.display = "none";
    //   menu.classList.remove("active")
    // }
    menu.classList.toggle("active");
  }