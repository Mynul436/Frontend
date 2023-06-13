// console.log($);
// console.log('sdfghjkj');
// console.log(jQuery)

// const jquery = require("./jquery");

// $("button").click(function(){
// console.log("Bitton Clicked");
// });

// jQuery(document).ready(function(){

//     $("button").click(function(){
//         console.log("this will only load after the full dom loaded");
//     })

// });

// jQuery.noConflict();
// jQuery(document).ready(function($){
//     $("#btn-id").click(function(){
//         console.log("this is under the NoConflict");
//     });
//     $("p").click(function(){
//         // console.log("this is under the NoConflict");
//         alert("this is p tag under the jquery");
//     }) ;
//     $(".btn-class").click(function(){
//         console.log("this is under the NoConflict");
//     })
// })



// jQuery.noConflict();
// jQuery(document).ready(function($){
    //Mouse events
//  $("p").click(function(){
//     console.log("Mouse Event");
//  });
//    $("p").dblclick(function(){
//     console.log("Double click");
//  });
//  $("p").mouseenter(function(){
//     console.log("Mouse Enter");
//  });
//  $("p").mouseleave(function(){
//     console.log("Mouse Leave");
//  });
 
// //Keyboard Events

// $("#name").keypress(function(){
//     console.log("Keyboard Pressed");
//  });
//  $("#name").keyup(function(){
//     console.log("Keyboard down");
//  });
//  $("#name").keyup(function(){
//     console.log("Keyboard up");
//  });
// //Form event 
//  $("#fname").focus(function(){
//     console.log("Focus");
//  });

//  $("#fname").blur(function(){
//     console.log("Blur");
//  });

//  $("#form-id").submit(function(a){
//     console.log("Submitted");
//     a.preventDefault();
//  });


//Window Event 
// $(window).resize(function(){
// console.log("Resized");
// });

// })

jQuery.noConflict();
jQuery(document).ready(function($){

$("#btn-hide").click(function(){
    $("#image-id").hide(10,function(){
        $("#btn-hide").hide(10,function(){
            console.log("Button Hide");
        })
    console.log("Hide image")
    })
    $("#btn-show").click(function(){
        $("#image-id").show(10,function(){
            $("#btn-hide").show(10,function(){
                console.log("Button show");
            })
            console.log("Show image");
        })
    })
});
//Hide and Show Toggle
$('#btn-toggle').click(function(){
    $('#image-id').toggle(1,function(){
        console.log("After Toggle show/hide");
    })
});

//Fade Out
$("#btn-fadeout").click(function(){
    $("#image-id").fadeOut();
});

//Slide up,down,Toggle

$("#btn-slideup").click(function(){
    $("#image-id").slideUp();
});
//animate

$("#btn-animate").click(function(){
    $("#bike-id").animate({left:"+=80"},1000,function(){
        console.log("This is animated");
    })
})
//get data
let p=$("p").text();
console.log(p);

$("p").text("Akhaliya Boro School");

//set data

$("#btn-setData").click(function(){
   $("p").text("This is New Text");
});

let htmldata=$("p").html();
console.log(htmldata);


let val=$("#name").val();
console.log(val);

$("#btn-setValue").click(function(a){
    console.log("Akash");
    $("#name").val("Akash");
    a.preventDefault();
})

//Get Attribute
let setVal=$("link").attr("href");
console.log(setVal); 

$("#btn-addCssClass").click(function(){
   // console.log("asdfsdfa");
    $("h1").addClass("myClass");
})
$("#btn-removeCssClass").click(function(){
    console.log("asdfsdfa");
    $("h1").removeClass("myClass");
})





// document.write(p);
// document.write("asdfadsf")

});



// let test="Mynul Islam <br> <u>Akash</u>         ";

// document.write(test);   