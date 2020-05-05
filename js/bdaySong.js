 //alert("Click Anywhere to enjoy Music 🎶🎵");
 $('#clk').click(function(){
    var audio = $('.song')[0];
    try{
    navigator.vibrate(20);}
    catch(Exception){
        console.log("Vibrate mode is not supported")
    }
        audio.play();         
});