document.addEventListener('DOMContentLoaded', myFunction2);						

function myFunction2() {   

document.getElementById('urlSubmit').addEventListener('click', function(event){		
																	
	var myTextInput = document.getElementById("myText").value; 					// get value if myText

	var req = new XMLHttpRequest();												// request								
	req.open("POST", "https://httpbin.org/post", true);							// uses POST and since it is asynchronous, it is true		
	
	req.setRequestHeader('Content-Type', 'application/json');					// need to send Content-Type	
	
	req.addEventListener('load',function(){
														
		console.log(JSON.parse(req.responseText));								// use console.log for testing purposes									
		$('#demo1').html(JSON.parse(req.responseText)['data']);					// send data to HTML 
												
	});
			
	req.send(JSON.stringify(myTextInput));										// turns input to string
	
	event.preventDefault();
	
});

}
