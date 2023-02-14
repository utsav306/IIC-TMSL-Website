window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0)
})

window.onload=function(){
    document.getElementById("preload").style.display = "none";
}