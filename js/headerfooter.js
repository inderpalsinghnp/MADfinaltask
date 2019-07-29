function headerfunc(){
    var x='<header>'
        +   '<div>'
        +       '<div class="container">'
        +           '<div>'
        +               '<a href="index.html"><img src="images/logo.png"></a>' 
        +               '<a id="useranchor" href="#"><span id="user">Login </span><span class="icon-user"></span></a>'
        +            '</div>'
        +       '</div>'
        +   '</div>'
        +    '<nav>'
        +        '<div class="container">'
        +            '<ul>'
        +                '<li><a id="mainsurvey" href="#">Main Survey</a></li>'
        +                '<li><a href="#">Food &amp; Health</a></li>'
        +                '<li><a href="#">Food Labels &amp; You</a></li>'
        +                '<li><a href="#">Fruits You Eat</a></li>'
        +                '<li><a href="#">Consumption &amp; Expenditure</a></li>'
        +                '<li><a href="#">Veggies You Eat</a></li>'
        +            '</ul>'
        +        '</div>'
        +    '</nav>'
        +'</header>';

    document.write(x);
}

function footerfunc(){
    var y='<footer>'
        +    '<div class=container>'
        +        '<div>'
        +            '<p><span>&copy; copyright 2016 by </span>Center for Science and Environment. All Rights Reserved</p>'           
        +            '<ul>'
        +                '<li><a href="#"><span class="icon-facebook"></span></a></li>'
        +                '<li><a href="#"><span class="icon-twitter"></span></a></li>'
        +                '<li><a href="#"><span class="icon-linkedin"></span></a></li>'
        +                '<li><a href="#"><span class="icon-google-plus3"></span></a></li>'
        +                '<li><a href="#"><span class="icon-pinterest"></span></a></li>'
        +            '</ul>'
        +        '</div>'
        +    '</div>'
        +'</footer>';

    document.write(y);
}