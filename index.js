let username=document.getElementById('username');
let password=document.getElementById('password');
let flag=0;
function validate(){
    if(username.value==""){
        document.getElementById('error1').innerHTML="Username cannot be empty!";
        flag=0;
    }
    else if(username.value.length<3){
        document.getElementById('error1').innerHTML="The username should contain minimum 3 letters!";
        flag=0;
    }
    else{
        document.getElementById('error1').innerHTML='';
        flag=1;
    }
    if(password.value==""){
        document.getElementById('error2').innerHTML="Password cannot be empty!";
        flag=0;
    }
    else{
        document.getElementById('error2').innerHTML="";
        flag=1;
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
}