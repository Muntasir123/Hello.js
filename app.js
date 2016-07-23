var g = H$('John','Doe');
g.greet().setLang("en").greet(true);

$('#login').click(function(){
    
    var loginGrtr = H$('John','Doe');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();
    
});