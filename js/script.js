/*function getInfo{
    let name

}
let nameInput = document.getElementById('name-input')
document.getElementsById('submit-form').addEventListener("click", function() {
    if (your-name == "") {
        prompt()
    }
}
)*/
//let nameInput = document.getElementById('your-name-input')



/*function validateForm(){
    const nameInputted = document.getElementById("your-name").value;
    document.getElementById('your-name-inputted').innerHTML = nameInputted;
}*/

//window.onload=function(){
    document.getElementById("submit-form").addEventListener("click", function(){
        let nameInputted = document.forms['contact-form']['your-name'].value;
        let emailInputted = document.forms['contact-form']['your-email'].value;
        let interestInputted = document.forms['contact-form']['your-interest'].value;

        if (!nameInputted) {
            document.getElementById("error-name").innerHTML = "Name cannot be blank.";  
        } else {
            document.getElementById("error-name").innerHTML = "";
        }

        if (!emailInputted) {
            document.getElementById("error-email").innerHTML = "Email cannot be blank.";
        } else {
            document.getElementById("error-email").innerHTML = "";
        }

        if (!interestInputted) {
            document.getElementById("error-interest").innerHTML = "Interest cannot be blank.";
        } else {
            document.getElementById("error-interest").innerHTML = "";
        }
    })
//}

const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add("active");
}

function startSlide(){
    setInterval(nextSlide, interval);
}

startSlide();