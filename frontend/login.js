 const Email = document.getElementById('mail');
 const passWord = document.getElementById('psswd');
const validateForm = () => {
    if(Email.value !== "" && passWord.value !== "")
    {
        console.log("user logged in successfully");
        Email.value = "";
        passWord.value = "";
        window.location.href = "form.html";
    }else{
        alert("skill issue");
    }
}




