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

$(document).ready(function(){
    logincheck();
    setgender();
});