window.onload = function() {
            
            var contentItems = document.querySelectorAll(".reviews__content");
            var btnLeft = document.querySelector(".reviews__left");
            var btnRight = document.querySelector(".reviews__right");
            var i = 0;
            var header = document.querySelector(".header");
            var btnToggle = document.querySelector(".main-nav__toggle");

            btnToggle.addEventListener("click", function() {

                header.classList.toggle("main-nav__toggle--closed");
                header.classList.toggle("main-nav__toggle--opened");
            });


            btnLeft.addEventListener("click", function(e) {
                e.preventDefault();
                contentItems[i].classList.remove("reviews__content--show");
                i--;
                if(i < 0) {
                    i = contentItems.length - 1;
                }

                contentItems[i].classList.add("reviews__content--show");
                
                
            });

            btnRight.addEventListener("click", function(e) {
                e.preventDefault();
                contentItems[i].classList.remove("reviews__content--show");
                i++;
                if(i > contentItems.length - 1) {
                    i = 0;
                }

                contentItems[i].classList.add("reviews__content--show");
                
                
            });

            


        }