console.log("Hi! Unfortunately there is nothing to find back here! Bye! ")
$("#portfolio-content").hide();
//Cursor
let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

//switching
var fadeSpeed = 300;
document.getElementById("home").addEventListener("click", function(){
  setTimeout(function(){
    $("#home-content").fadeIn(fadeSpeed);
  }, fadeSpeed);
  $("#portfolio-content").fadeOut(fadeSpeed);
  
})

document.getElementById("portfolio").addEventListener("click", function(){
  setTimeout(function(){
    $("#portfolio-content").fadeIn(fadeSpeed);
  }, fadeSpeed);
  $("#home-content").fadeOut(fadeSpeed);
})



