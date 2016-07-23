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
    "Hello John!"
    Greetings,John Doe!"

#An Example with JQuery
```html
<h2>Example of code</h2>

<pre>
    <div class="container">
        <div class="block two first">
            <h2>Your title</h2>
            <div class="wrap">
            //Your content
            </div>
        </div>
    </div>
</pre>
```
