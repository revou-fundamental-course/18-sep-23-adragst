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



function validateForm(){
    const nameInputted = document.getElementById("your-name").value;
//    const nameInputted = nameInput.value;
    document.getElementById('your-name-inputted').innerHTML = nameInputted;
}

//window.onload=function(){
    document.getElementById('submit-form').addEventListener("click", validateForm())
//}
