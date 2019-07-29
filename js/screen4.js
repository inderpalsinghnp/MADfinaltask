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

function getgender(){
    if(localStorage.getItem("gender")=="male"){
        $("#gender-img").attr("src","images/male.png");
    }
    if(localStorage.getItem("gender")=="female"){
        $("#gender-img").attr("src","images/female.png");
    }
}


function colorchange(){
    var flag=1;
    $(".li-selector").mouseenter(function(){
        $(this).prevAll().css("background-color","rgb(118,186,28)");
        $(this).css("background-color","rgb(118,186,28)");
    }).mouseleave(function(){
        $(this).prevAll().css("background-color","#4646b1");
        $(this).css("background-color","#4646b1");
    });
    
    $(".li-selector").click(function(){
        if((flag==1) || (flag ==2)){
            $(this).prevAll().css("background-color","#4646b1");
            $(this).css("background-color","#4646b1");
        }

        if(flag==1){
            $("#li-head1").removeClass("li-active").addClass("li-color");
            $("#li-head2").removeClass("li-color").addClass("li-active");
        }

        if(flag==2){
            $("#li-head2").removeClass("li-active").addClass("li-color");
            $("#li-head3").removeClass("li-color").addClass("li-active");
        }

        flag=flag+1;
    });
}

$(document).ready(function(){
    logincheck();
    getgender();
    colorchange();
});