
//Makes the modal display
function openModal() {
        document.getElementById("lightbox").style.display = "block";
}

//Stops the modal from displaying
function closeModal() {
        document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Buttons
function plusSlides(n) {
        showSlides(slideIndex += n);
}

//Thumbnails
function currentSlide(n) {
        showSlides(slideIndex = n);
}

//Presents the slide of the given number
function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        
        //Loops from last slide to first
        if (n > slides.length) {
                slideIndex = 1;
        }
        
        //Loops from first slide to last
        else if (n < 1) {
                slideIndex = 9
        }

        //Disables all slides
        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }

        //Deactivates all thumbnails
        for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
        }

        //Activates the slide and thumbnail corresponding to the slide number
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
}