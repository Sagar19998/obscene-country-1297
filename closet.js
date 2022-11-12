// registration page javascript




function addData(){

    var Name= document.getElementById("name").value
    var email= document.getElementById("email").value;
    var pass = document.getElementById("pwd").value;
    var number=document.getElementById("num").value;
    
    
    localStorage.setItem("username",Name);
    localStorage.setItem("usermail",email);
    localStorage.setItem("userpwd",pass);
    localStorage.setItem("usernumber",number);
    
    alert("REGISTRATION SUCCESSFULL")
    
    }




 // log in page javascript


 
function checkData(){



    var enteremail=document.getElementById("email").value;
    var enterpwd=document.getElementById("pwd").value;

    //get data from localstorage that we set through ragestragin page

    var getEmail=localStorage.getItem("usermail");
    var getpwd=localStorage.getItem("userpwd");


    if(enteremail===getEmail){
       
        if(enterpwd===getpwd){

            window.location.assign("closet.html");
            alert("LOGIN SUCCESSFUL")
        }
        else{
            alert(" WRONG PASSWORD")
        }
   
    }
     else{
        alert("INVALID DETAILS")
     }



    }