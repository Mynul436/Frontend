// console.log($);
// console.log('sdfghjkj');
// console.log(jQuery)

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



jQuery.noConflict();
jQuery(document).ready(function($){
    //Mouse events
 $("p").click(function(){
    console.log("Mouse Event");
 });
   $("p").dblclick(function(){
    console.log("Double click");
 });
 $("p").mouseenter(function(){
    console.log("Mouse Enter");
 });
 $("p").mouseleave(function(){
    console.log("Mouse Leave");
 });
 
//Keyboard Events

$("#name").keypress(function(){
    console.log("Keyboard Pressed");
 });
 $("#name").keyup(function(){
    console.log("Keyboard down");
 });
 $("#name").keyup(function(){
    console.log("Keyboard up");
 });
//Form event 
 $("#fname").focus(function(){
    console.log("Focus");
 });

 $("#fname").blur(function(){
    console.log("Blur");
 });

 $("#form-id").submit(function(a){
    console.log("Submitted");
    a.preventDefault();
 });


//Window Event 
$(window).resize(function(){
console.log("Resized");
});






})