let stars = document.getElementById ('stars');
let march = document.getElementById ('march');
let space = document.getElementById ('space');
let astronout = document.getElementById ('astronout');
let martians = document.querySelector(".itmartians");
console.log(scrollY);
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + "px";
    march.style.top = value *3 + 'px';
    space.style.top = value*3 +"px";
    astronout.style.left = value * 3 + "px";
    martians.style.fontSize = value + "px";

    if (scrollY >= 67){
        martians.style.fontSize = 67 + "px"; 
        martians.style.position = "fixed"; 
    }

    if (scrollY >= 203){
        document.getElementById('main').style.background = "linear-gradient(#376281,#10001f)";
    }
    else{
        document.getElementById('main').style.background = "linear-gradient(#020b30,#081958 )";
    }
}