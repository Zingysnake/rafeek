const fadersUp = document.querySelectorAll(".fade-up");
const fadersDown = document.querySelectorAll(".fade-down");
const fadersLeft = document.querySelectorAll(".fade-left");
const fadersRight = document.querySelectorAll(".fade-right");
const fadersIn = document.querySelectorAll(".fade-in");


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };


  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return ;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);



fadersUp.forEach( faderUp =>{
    appearOnScroll.observe(faderUp);
})
fadersDown.forEach( faderDown =>{
    appearOnScroll.observe(faderDown);
})
fadersLeft.forEach( faderLeft =>{
  appearOnScroll.observe(faderLeft);
})
fadersRight.forEach( faderRight =>{
  appearOnScroll.observe(faderRight);
})
fadersIn.forEach( faderIn =>{
    appearOnScroll.observe(faderIn);
  })


var i =0, text;
text = "will join you everywhere";
function typing() 
{
    if(i<text.length)
        {
            document.getElementById("slogan").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 100);
        }    
}
typing();

function button(){
    document.getElementById("start").style.display = "block";
}

function hide(){
    $("#sub-modal").modal("hide");
    $("#done-msg").css("display", "none");
}

setTimeout(button, 3500);

$(document).ready(function(){
    $('#start').click(function(){
       $("#options-modal").modal("show")
    })

    $("#lost").click(function(){
        window.location.href = '../lost.html';
    })

    $("#sub").click(function(){
        $("#sub-modal").modal("show");
        $("#options-modal").modal("hide");
    })

    $("#done").click(function(){
        var sub = $("#subscription").val();
        var pay = $("#payment").val();
        console.log(sub + " / " + pay)

        if(sub ==  "0" || pay == "0"){
            $("#alert-msg").html("Please select a subscription and payment method");
            $("#alert-msg").css("display", "block");
        }
        
        else{
            $("#alert-msg").css("display", "none");
            $("#done-msg").html("Done, you're now a VIP user");
            $("#done-msg").css("display", "block");
            setTimeout(hide, 1500);
        }


    })
})