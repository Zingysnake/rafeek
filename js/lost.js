$(document).ready(function(){
    $("#submit").click(function(){
        var src = $("#source").val();
        var dest =  $("#dest").val();

        // console.log(src +  " " + dest);

        if(src  == "" || dest == ""){
            $("#warning").html("Please choose an option");
            $("#warning").css("display",  "block");
        }
        
        else
        {
            // console.log(src + " " + dest);
            if(src == 1 &&  dest == 1){
                $("#road").html(`
                    <li>
                        اركب من عندك ميكروباص فيصل و انزل عند الموقف هتلاقي جوة الموقف مكروباصات مدينة نصر بتعدي علي الاستاد
                        <br>
                        Estimated price: 18 EGP
                        <br>
                        Estimated time: 45 mins
                    </li>
                    <li>
                        اركب باص الجيزة و من الجيزة هتركب مترو اتجاه شبرا و تنزل عند الجامعة تتجه للخط التالت و تركب إتجاه عدلي منصور لحد الإستاد 
                        <br>
                        Estimated price: 18 EGP
                        <br>
                        Estimated time: 50~55 mins
                    </li>
                `);
                    $("#guide-modal").modal("show");
                    $("#warning").css("display",  "none");
                }
                
                else if(src == 2 &&  dest == 2){
                    $("#road").html(`
                        <li>
                            اتمشي لمترو الدقي و اركب اتجاه شبرا و انزل محطة السادات غير لإتجاه صفاء حجازي هتطلع من مترو صفاء حجازي تتمشي لمدة ٣ دقايق هتلاقي نفسك وصلت
                            <br>
                            Estimated price: 10 EGP
                            <br>
                            Estimated time: 20 mins
                        </li>
                    `)
                    $("#location").html(`
                        <div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Dokki%20metro%20station&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" style="width: 390px; height: 300px;"></iframe><style>.mapouter{display:table;}.gmap_canvas{overflow:hidden;position:relative;height:300px;width:390px;background:#fff;}</style><a href="https://www.taxuni.com/qbi-calculator/">QBI Calculator</a><style>.gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}</style></div></div>    
                    `)
                    $("#guide-modal").modal("show");
                    $("#warning").css("display",  "none");
                    }
                    
                else if(src == 3 &&  dest == 3){
                    $("#road").html(`
                        <li>
                            اركب مترو الخط التالت محطه عبده باشا أو محطه العباسيه و انزل اتجاه الكيت كات و انزل محطه صفاء حجازي 
                            <br>
                            Estimated price: 8 EGP
                            <br>
                            Estimated time: 15 mins
                        </li>
                        <li>
                            اركب من ميدان العباسيه من ناحيه اللى تودى على رمسيس اى اتوبيس مكتوب عليه الزمالك زى (٦٦ ،١٢١ ) 
                            <br>
                            Estimated price: 12 EGP
                            <br>
                            Estimated time: 20 - 30 mins
                        </li>
                    `)
                    $("#location").html(`
                        <div class="mapouter"><div class="gmap_canvas" id="media"><iframe src="https://maps.google.com/maps?q=abdo%20basha%20metro%20station&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" style="width: 210px; height: 120px;"></iframe><style>.mapouter{display:table;}.gmap_canvas{overflow:hidden;position:relative;height:120px;width:210px;background:#fff;}</style><a href="https://www.taxuni.com/1099-tax-calculator/">1099 Tax Calculator</a><style>.gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}</style></div></div>
                        <div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=%D9%85%D8%AD%D8%B7%D8%A9%20%D9%85%D8%AA%D8%B1%D9%88%20%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%B3%D9%8A%D8%A9&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" style="width: 210px; height: 120px;"></iframe><style>.mapouter{display:table;}.gmap_canvas{overflow:hidden;position:relative;height:120px;width:210px;background:#fff;}</style><a href="https://www.taxuni.com/1099-tax-calculator/">1099 Tax Calculator</a><style>.gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}</style></div></div>
                    `)
                    $("#guide-modal").modal("show");
                    $("#warning").css("display",  "none");
                }

                else
                {
                    $("#warning").html("Please choose an option");
                    $("#warning").css("display",  "block");
                }
        }

    })
})