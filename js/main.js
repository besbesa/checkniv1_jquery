$('#bt1').click(function() {
    $('#abc').css("font-weight","bold")
});

$('#bt2').click(function() {
    $('#abc').css("font-style","italic")
});

$('#bt3').click(function() {
    $('#abc').css("text-decoration","underline")
});

function func1(){
    console.log($("#bcd").val());
   $('#abc').css('fontFamily',$("#bcd").val());
}

function func2(){
    console.log($("#efg").val());
   $('#abc').css('fontSize',$("#efg").val()+"px");
}


