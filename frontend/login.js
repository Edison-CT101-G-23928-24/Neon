 const Email = document.getElementById('mail');
 const passWord = document.getElementById('psswd');
const validateForm = () => {
    if(Email.value !== "" && passWord.value !== "")
    {
        console.log("user logged in successfully");
        window.location.href = "/frontend/home.html";
        // alert("You have loggged in successfully");
        
        
    }else{
        console.log("skill issue");
        Email.value = "";
        passWord.value = "";
    }
    
}
// Email.addEventListener("input", () => {
//     //clear old custom messages so native validation can work
//     Email.setCustomValidity("");

//     //If still invalid after reset, add custom message
//     if (!Email.validity.valid){
//         Email.setCustomValidity("Acha eeh wei");
//     }
// })



