$(document).ready(function(){
    $("#btnPara").click(function(){
        $(".pon").append(" <b>This is a bold paragraph.</b><br>.<b>                      Dum haec in oriente aguntur...etc.</b>");
    });

});

$(document).ready(function(){
    $("#btnPara").click(function(){
        $(".poff").append(" <xmp><b><p>This is a bold paragraph.</p></b></xmp>");
    });

});

//title

$(document).ready(function(){
    $("#btnTitle").click(function(){
        $(".titleon").append("This is a title<br>.");
    });

});

$(document).ready(function(){
    $("#btnTitle").click(function(){
        $(".titleoff").append(" <xmp><title>This is a title.</title></xmp>");
    });

});