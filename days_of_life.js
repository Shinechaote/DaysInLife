
function setup(){
	document.getElementById('datePicker').valueAsDate = new Date();
	frameRate(60);
}
function draw(){

		var divisor=(1000*60*60*24);
		var unit = document.getElementById('format').value.toString();
		switch(document.getElementById('format').value.toString()){
			case "Milliseconds":
				divisor = (1);
				break;
			case "Seconds":
				divisor = (1000);
				break;
			case "Minutes":
				divisor = (1000*60);
				break;
			case "Hours":
				divisor = (1000*60*60);
				break;
			case "Days":
				break;
			case "Weeks":
				divisor = (1000*60*60*24*7);
				break;

		}
		var date_of_birth = document.getElementById('datePicker').valueAsDate.getTime();
		var current_date = new Date().getTime();
		var date_difference = current_date - date_of_birth;
		date_difference = Math.floor(date_difference / divisor);
		daysOutput.innerHTML = "You have lived " + date_difference.toString() + " " + unit +" already";
}
