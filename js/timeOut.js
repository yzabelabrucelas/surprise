var deadline = new Date("May 6, 2020 00:00:00").getTime(); 

var x = setInterval(function() 
{ 
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("demo").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + "";
	if (t < 0) { 
		clearInterval(x); 
    document.getElementById("demo").innerHTML = "expired"; 
    document.getElementById("demo").style.color = 'tomato';
	} 
}, 1000); 



  function showButton() {
    var now = new Date().getTime(); 
    var t = deadline - now; 
  document.getElementById("preview").style.visibility = "visible";
}
setTimeout("showButton()", 15000); // in ms = 15 sec