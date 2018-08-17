var callOpacity = function(){
  var textOpacity = document.getElementById('description');
    textOpacity.style.opacity = "1.0";
}

window.onload = function() {
    var title = document.getElementById('bannerTitle');
   
    title.style.marginLeft = "0px";
    
   setTimeout( callOpacity, 1000);
   
  };



  function myFunction() {
    var x = document.getElementById("switchMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

var modal = document.getElementById('aboutModal');
var btn = document.getElementById("aboutModalBtn");
var span = document.getElementsByClassName("aboutModalClose")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}