var christmas = new Date("Dec 25, 2021 00:00:00").getTime();
var hallo = new Date("Oct 31, 2021 00:00:00").getTime();
var nyear = new Date("Jan 1, 2022 00:00:00").getTime();


//var countDownDate = new Date("Dec 25, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance1 = christmas - now;
  var distance2 = hallo - now;
  var distance3 = nyear - now;
  // Time calculations for days, hours, minutes and seconds


  //christmass
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
  
  
  //halloween
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  
  
  //new year
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("navidad").innerHTML = days1 + " Days " + hours1 + " h "
  + minutes1 + " m ";
  
  
  document.getElementById("hallo").innerHTML = days2 + " Days " + hours2 + " h "
  + minutes2 + " m ";
  
  
  document.getElementById("año").innerHTML = days3 + " Days " + hours3 + " h " 
  + minutes3 + " m ";
    
  // If the count down is over, write some text 
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);