//var signUpName = document.getElementById("signUpName");
//var signUpEmail = document.getElementById("signUpEmail");
//var signUpPass = document.getElementById("signUpPass");

// /var allUsers;
/*
/* if(localStorage.getItem(allUsers) == null){
    allUsers = [];
}
else{
    allUsers = JSON.parse(localStorage.getItem("users"));
}
 

document.querySelector(".btn").addEventListener("click", function(){

    if(signUpName.value == "" && signUpEmail.value == ""&& signUpPass == "" ){
        document.querySelector(".error2").innerHTML = "All inputs required"
    }else if(signUpName.value != "" && signUpEmail.value == "" && signUpPass == ""){
        document.querySelector(".error2").innerHTML = "All inputs required"
    }
    else if(signUpName.value == "" && signUpEmail.value == "" && signUpPass != ""){
        document.querySelector(".error2").innerHTML = "All inputs required"

    }
    else if(signUpName.value != "" && signUpEmail.value != "" && signUpPass == ""){
        document.querySelector(".error2").innerHTML = "All inputs required"

    }
    else if(signUpName.value != "" && signUpEmail.value == "" && signUpPass != ""){
        document.querySelector(".error2").innerHTML = "All inputs required"

    }
    else if(signUpName.value == "" && signUpEmail.value != "" && signUpPass == ""){
        document.querySelector(".error2").innerHTML = "All inputs required"

    }
    else if(signUpName.value == "" && signUpEmail.value != "" && signUpPass != ""){
        document.querySelector(".error2").innerHTML = "All inputs required"

    }
    
    else if(signUpEmail.value == signUpEmail.value){
        document.querySelector(".error2").innerHTML = "this email is already"

    }
    
    else{


        var inputs = {
            name: signUpName.value,
            email: signEmail.value,
            password: signPass.value,
        }
        allUsers.push(inputs);
        localStorage.setItem("users",JSON.stringify(allUsers));
        document.querySelector("errors2").innerHTML = "success"
        document.querySelector("errors2").style.color = "green"
        clearForm();
    }
})



function clearForm(){
signUpName.value = "";
signUpEmail.value = "";
signUpPass.value = "" ;
}
 */

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

function login()
{
    let loginAlert = document.getElementById("loginAlert");
    let value = GetCookie(loginEmail.value);
    
    if(loginEmail.value.length == 0 || loginPassword.value.length == 0)
    {
        loginAlert.innerText = "Fill the inputs first";
        loginAlert.classList.replace("d-none", "d-block");
    }
    else
    {
    if(value == -1)
    {
        console.log("Email does not exist");
        loginAlert.innerText = "Email does not exist";
        loginAlert.classList.replace("d-none", "d-block");
    }
    else
    {
        let userInfo =value.split('*');
       // let username = userInfo[0];
        let realPass = userInfo[1];
       if(realPass == loginPassword.value)
       {
           location.assign("index.html");
       }
       else
       {
           console.log("Wrong Password");
           loginAlert.innerText = "Wrong Password";
           loginAlert.classList.replace("d-none", "d-block");
       }
    }
    }
}
