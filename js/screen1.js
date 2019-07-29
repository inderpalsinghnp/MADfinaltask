function logincheck(){
    if(localStorage.getItem("username")!=null){
        $("#user").text(localStorage.getItem("username"));
        $("#mainsurvey").css("background-color","green");
        $("#mainsurvey").css("color","white");
    }
    else{
        alert("You aren't loggef in! (Temporry Check)");
        window.location.href="index.html";
    }
}

function setgender(){
    $("#male").click(function(){
        localStorage.setItem("gender","male");
        $("#gender-img").attr("src","images/male.png");
    });

    $("#female").click(function(){
        localStorage.setItem("gender","female");
        $("#gender-img").attr("src","images/female.png");
    });
}

function mobilecheck(){
    var smob=$.trim($("#mobile").val());
   if(smob.length==10){
       if(isNaN(smob)){
            alert("Characters Not Allowed in Mobile Number");
            return false;
        }
       else{
           var mobfilter=/^[6-9]\d{9}$/;
           if(mobfilter.test(smob)){
               return true;
           }
           else{
               alert("Mobile Number is Invalid");
               return false;
           }
       }
   }
   else{
       alert("Please Enter 10 digit indian mobile no.");
        return false;
    }
}

function formcheck(){
    $("#continue-btn").click(function(){
        if(mobilecheck()){
            window.location.href="screen2.html";
        }
    });
}

$(document).ready(function(){
    logincheck();
    setgender();
    formcheck();
});