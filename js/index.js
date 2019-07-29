function loginshow() {
    $("#useranchor").click(function () {
        $("#overlay").css("display", "block");
        $("#overlaycontent").css("display", "block");
        $("body").css("position", "fixed");
        $("body").css("height", "100%");
        $("body").css("overflow", "hidden");
    });
}

function hideprocess(){
    $("#overlay").css("display", "none");
    $("#overlaycontent").css("display", "none");
        $("body").css("position", "static");
        $("body").css("height", "auto");
        $("body").css("overflow", "auto");
}

function loginhide() {
    $("#button-close").click(function (e) {
        e.stopPropagation();
        hideprocess();
    });

    $("#overlay").click(function(e){
        e.stopPropagation();
        hideprocess();
    });
}

function usertext(){
    $("#user").text("Inder Pal Singh ");
    localStorage.setItem("username", "Inder Pal Singh ")
    $("#survey-btn").removeClass("a-disabled");
    $("#survey-btn").addClass("a-enabled");
}

function validateEmail(semail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(semail)) {
        return true;
    }
    else {
        return false;
    }
}

function validatepass(spass){
    var passfilter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    if(passfilter.test(spass)){
        return true;
    }
    else{
        return false;
    }
}

function loginprocess() {
    $("#button-login").click(function (e) {
        var semail = $('#email').val();
        var spass= $('#password').val();
    
        if(($.trim(semail).length==0) || (validateEmail(semail) == false)){
            alert("Please enter a valid email address");
        }
        else{
            if(validatepass(spass) == false){
                alert("Password length must be 8-10, must contain at least 1 uppercase, 1 lowercase, 1 digit and 1 special character");
            }
            else{
                if($.trim(semail)=="inderpal.singh@npglobal.in"){
                    if(spass=="MadUI@1234"){
                        hideprocess();
                        usertext();
                    }
                    else{
                        alert("Password doesn't matched given Email!");
                    }
                }
                else{
                    alert("Email Id Not Found!");
                }
            }
        }
    });
}


$(document).ready(
    function () {
        if ($.trim($("#user").text()) == "Login") {
            loginshow();
        }
        loginhide();
        loginprocess();

    }
);