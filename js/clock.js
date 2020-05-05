function startTimer(duration, display, display2) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes;
      display2.textContent = seconds;
      
  
      
  
      if (--timer < 0) {
          timer = duration;
      }
    // console.log(parseInt(seconds))
    window.localStorage.setItem("seconds",seconds)
    window.localStorage.setItem("minutes",minutes)
  }, 1000);
  }
  
  window.onload = function () {
    sec  = parseInt(window.localStorage.getItem("seconds"))
    min = parseInt(window.localStorage.getItem("minutes"))
  
    if(parseInt(min*sec)){
      var fiveMinutes = (parseInt(min*60)+sec);
    }else{
      var fiveMinutes = 60 * 5;
    }
  
     display = document.querySelector('#minutes');
     display2= document.querySelector('#seconds');
  
     startTimer(fiveMinutes, display,display2);
  
  
  
  };