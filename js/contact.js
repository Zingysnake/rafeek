$(document).ready(function(){
    $("#form-submit").click(function(){
        var name = $("#name").val();
        var email = $("#mail").val();
        var phone = $("#phone").val();
        var feedback = $("#feedback").val();


        if(name  == "" || email == "" || phone == "" || feedback == ""){
            $("#warning").html("Please fill the fields");
            $("#warning").css("display", "block");
        }
        
        else
        {
            $("#warning").css("display", "none");
            $("#thank-modal").modal('show')
            setTimeout(move, 2000);

        }

    })
})

function move(){
    window.location.href = "https://zingysnake.github.io/rafeek/landing.html";
}
