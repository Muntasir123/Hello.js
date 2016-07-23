# Hello.js

A Javascript Library I made that supports greetings in Spanish and English
Hello.js utilizes name calling by distinguishing between formal and "informal" calls in English and Spanish

#Usage
You can use my library concurrently with JQuery, as well as chaining JQuery methods and methods that I have provided.


You can access my library by doing
$H(arg1,arg2,arg3)
Of course, these parameters are optional and I have set some default ones.

#Simple Example

    var g = H$('John','Doe');
    g.greet().setLang("en").greet(true);
    
Output:
```html
    "Hello John!"
    Greetings,John Doe!"
```

#An Example with JQuery

Given Some Simple "login" layout say
```html
<div id = "logindiv">
    <select id = "lang">
        <option value = "en">English</option>
         <option value = "es">Spanish</option>
    </select>
<input type = "button" value = "login" id = "login">
</div>
<h1 id  = "greeting"></h1>
```
Utilizing our HTML with Hello.js and JQuery

```html
$('#login').click(function(){
    
    var loginGrtr = H$('John','Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
    
});
```
