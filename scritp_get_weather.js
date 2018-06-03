function myFunction() {      

	var city = document.getElementById("cityId").value;
	var country = document.getElementById("countryId").value;	
	var dataString = city + ',' + country + '&appid=e5d42729fdbc1ff1b2320e63faf9b6b9';
	
	var req = new XMLHttpRequest();
    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ dataString, false);
    req.send(null);
	  
	myData = JSON.parse(req.responseText);
	console.log(myData);
	  
	$('#demo1').html(myData.weather[0].description);
	$('#demo2').html(myData.main.humidity);
	
}
