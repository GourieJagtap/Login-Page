let username=document.getElementById('username');
let password=document.getElementById('password');
let flag=1;
function validate(){
    if(username.value=="" ){ 
        document.getElementById('error1').innerHTML="Username cannot be empty!";
        if(password.value==""){
        document.getElementById('error2').innerHTML="Password cannot be empty!";
        }
        else{
            document.getElementById('error2').style.display="none";
        }
        
        flag=0;
    }
    else if(username.value.length<3){
        document.getElementById('error1').innerHTML="The username should contain minimum 3 letters!";
        if(password.value==""){
            document.getElementById('error2').innerHTML="Password cannot be empty!";
        }
        else{
            document.getElementById('error2').style.display="none";
        }
        flag=0;
    }
    else if(password.value==""){
        document.getElementById('error1').innerHTML="The username should contain minimum 3 letters!";
        if(username.value.length<3){
            document.getElementById('error2').innerHTML="Password cannot be empty!";
        }
        else{
            document.getElementById('error1').style.display="none";
        }
        flag=0;
    }
    
    
    else{
        document.getElementById('error1').innerHTML='';
        document.getElementById('error2').innerHTML='';
        flag=1;
        location.reload();
        alert("form submitted!");
    }
    if(username.value.length>2){
        document.getElementById('error1').style.display="none";
        if(password.value==""){
            document.getElementById('error2').innerHTML="Password cannot be empty!";
        }
        else{
            document.getElementById('error2').style.display="none";
        }
        flag=0;
    }
    if(flag){
        return true;
    }
    else{
        return false;
    }
}
