# Hello.js

A Javascript Library I made that supports greetings in Spanish and English


#Usage
You can use my library concurrently with JQuery, as well as chaining JQuery methods and methods that I have provided.


You can access my library by doing
$H(arg1,arg2,arg3)
Of course, these parameters are optional and I have set some default ones.

#Simple Example

var g = H$('John','Doe');
g.greet().setLang("en").greet(true);

#An Example with JQuery

Given some HTML layout say
<div id = "logindiv">
    <select id = "lang">
        <option value = "en">English</option>
        <option value = "es">Spanish</option>
    </select>
<input type = "button" value = "login" id = "login">
</div>
<h1 id  = "greeting"></h1>


We can use some Hello.js magic to show our greetings from this simple "login" template

$('#login').click(function(){
    
    var loginGrtr = H$('John','Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($$('#lang').val()).HTMLGreeting('#greeting',true).log();
    
});