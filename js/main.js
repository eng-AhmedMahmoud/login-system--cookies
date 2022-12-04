const usernameInput = document.getElementById("signUpName")

const userEmailInput = document.getElementById("signUpEmail");

const userPasswordInput = document.getElementById("signUpPass");
const signupBtn = document.getElementById("signupBtn");

const usernameAlert = document.getElementById("usernameAlert");
const userPasswordAlert = document.getElementById("userPasswordAlert");
const userEmailAlert = document.getElementById("userEmailAlert");

let usersInfo;

// Cookies
function signUp()
{
     //isExist();
    if(usernameAlert.innerText.length == 0 && userPasswordAlert.innerText.length == 0 && userPasswordAlert.innerText.length==0)
    {
        SetCookie(userEmailInput.value , usernameInput.value + "*" + userPasswordInput.value);
        location.assign("./login.html");
    }
}

// sign up with local storage
/* function signUp() {

    userInputsValidation();
    isExist();

    if (userInputsValidation() == true && isExist() == false) {
        let user =
        {
            name: usernameInput.value,
            email: userEmailInput.value,
            password: userPasswordInput.value
        }

        usersInfo.push(user)
        localStorage.setItem("users", JSON.stringify(usersInfo));

        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");

        const signin = document.getElementById("signin")
        signin.classList.replace("d-none", "d-block");
    }

} */


//username validation
function usernameValidation() {
    
    if (usernameInput.value.length != 0) {
        usernameAlert.innerText = "";
        usernameAlert.classList.replace("d-block", "d-none");
    }
    else {
        usernameAlert.classList.replace("d-none", "d-block");
        usernameAlert.innerText = "You must enter your name !!";
    }
}
//username with regex
/* function usernameValidation() {
    const usernameAlert = document.getElementById("usernameAlert");

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(usernameInput.value) == true && usernameInput.value != "") {
        usernameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {
        usernameAlert.classList.replace("d-none", "d-block");

        return false
    }
} */

function userPasswordValidation() {
    let regex = /^.{5,15}$/;
    

    if(userPasswordInput.value.length != 0)
    {
       if(regex.test(userPasswordInput.value))
         {
            userPasswordAlert.innerText = "";
            userPasswordAlert.classList.replace("d-block", "d-none");
         }
         else
         {
            userPasswordAlert.classList.replace("d-none", "d-block");
            userPasswordAlert.innerText = "you password must contain from 5 to 15 characters";
         }
    }
    else
    {
        userPasswordAlert.classList.replace("d-none", "d-block");
        userPasswordAlert.innerText = "you must enter your password !!";
    }
}

//regex 
function userEmailValidation() {
    
    let regex = /@[a-z]{5,10}(\.com)$/;

    if(userEmailInput.value.length != 0)
    {
        if(regex.test(userEmailInput.value))
        {
           if(isExist())
           {
            userEmailAlert.innerText = "this email already exists !!";
            userEmailAlert.classList.replace("d-none", "d-block");
           }
           else
           {
           userEmailAlert.innerText = "";
           userEmailAlert.classList.replace("d-block", "d-none");
           }
        }
        else
        {
            userEmailAlert.innerText = "Please enter a valid email address (name@example.com)";
            userEmailAlert.classList.replace("d-none", "d-block");
        }
    }
    else
    {
        userEmailAlert.classList.replace("d-none", "d-block");
        userEmailAlert.innerText = "you must enter your email !!";
    }

}

function isExist() {
    let check = GetCookie(userEmailInput.value);
    
    if(check == -1)
       return false;

    return true;

}

// inputs validation
/* function userInputsValidation() {
    usernameValidation();
    userEmailValidation();
    userPasswordValidation();

    if ((usernameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true)) {
        return true
    }
    else {
        return false
    }
}
 */

// login with local storage
/* var username = localStorage.getItem("sessionUsername");
function login() {
    let loginEmail = document.getElementById("loginEmail");
    let loginPassword = document.getElementById("loginPassword");
    let loginBtn = document.getElementById("loginBtn");
    let wrongMsg = document.getElementById("wrongMsg");

    if (loginEmail.value == "" || loginPassword.value == "") {
        let fillMsg = document.getElementById("fillMsg");
        fillMsg.classList.replace("d-none", "d-block");
        return false
    }

    for (var i = 0; i < usersInfo.length; i++) {
        if (usersInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() && usersInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()) {

            localStorage.setItem('sessionUsername', usersInfo[i].name)
            loginBtn.setAttribute("href", "login.html");
        }
        else {
            wrongMsg.classList.replace("d-none", "d-block");
        }
    }
} */

function displayWelcomeUser() {
    document.getElementById("username").innerHTML = "Welcome " + username;

}
function logout() {
    localStorage.removeItem('sessionUsername')
}
