let userEmail = document.getElementById('email');
let errmsg = document.getElementById('err-msg');
let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkfunc(){
    if(userEmail.value.length === 0){
        errmsg.innerHTML="Oops! Please add your email";
    }
    else if(!userEmail.value.match(email_reg)){
        errmsg.innerHTML = "Oops! Please check your email";
    }
    else{
        errmsg.innerHTML="";
    }
}