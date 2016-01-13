$(document).ready(function(){
  var appId = "&APPID=6a6a42f96194e6621a7f152f6476b188"; 
  var visual, temp, location, humidity;
  // var $weather = "Butterweather: <span id='temp'></span>F, Butter Location:<span id='location'></span>, Looks like<span id='visual'></span>"
  $(".text").text("NOPE")
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?zip=94114,us' + appId,
    type: 'GET'
  })
  .done(function(e) {
    var $weather = "Butterweather: <span id='temp'></span>F, Butter Location:<span id='location'></span>, Looks like<span id='visual'></span>"
    humidity = e.main.humidity;
    visual = e.weather[0].main;
    temp = ((e.main.temp * 9/5) - 459.67).toFixed(1);
    location = e.name;
    console.log("success", temp, location, visual);
    $("#temp").text(temp)
    $("#visual").text(visual)
    $("#location").text(location)
    $(".weather").html($weather)
  })
  .fail(function(e) {
    console.log("error");
  })
  .always(function(e) {
    console.log("complete", e);
  });






})