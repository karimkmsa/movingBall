var myimg = document.querySelector("img");
document.addEventListener("mousemove",function(e){

myimg.style.left = e.clientX + "px"
myimg.style.top = e.clientY +"px"


})