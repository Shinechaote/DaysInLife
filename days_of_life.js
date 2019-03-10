var timeHTML;
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
Object.prototype.equals = function(b) {
    var a = this;
    for(i in a) {
        if(typeof b[i] == 'undefined') {
            return false;
        }
        if(typeof b[i] == 'object') {
            if(!b[i].equals(a[i])) {
                return false;
            }
        }
        if(b[i] != a[i]) {
            return false;
        }
    }
    for(i in b) {
        if(typeof a[i] == 'undefined') {
            return false;
        }
        if(typeof a[i] == 'object') {
            if(!a[i].equals(b[i])) {
                return false;
            }
        }
        if(a[i] != b[i]) {
            return false;
        }
    }
    return true;
}
function setup(){
  if(isSafari){
    var date = new Date().getDate().toString();
    var month = new Date().getMonth().toString();
    var year = (new Date().getYear() + 1900).toString();
    document.getElementById('datePicker').type = "text";
    document.getElementById('datePicker').value = date + "." + month + "." + year;
  }
  else{
    document.getElementById('datePicker').valueAsDate = new Date();
  }
	frameRate(2);
	timeHTML = daysOutput.innerHTML;
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
		var date_of_birth_arr = document.getElementById('datePicker').value.split(".");
    var date_of_birth = new Date(date_of_birth_arr[2],date_of_birth_arr[1],date_of_birth_arr[0]);
		var current_date = new Date().getTime();
		var date_difference = current_date - date_of_birth;


    switch(unit){
      case "Milliseconds":
        date_difference += 1000*60*60;
        break;
      case "Seconds":
        date_difference += 1000*60;
        break;
      case "Minutes":
        date_difference += 60;
        break;
      case "Hours":
        date_difference += 1;
        break;
      case "Days":
        date_difference += 1.0/24.0;
        break;
      case "Weeks":
        date_difference += 1.0/(24.0*7.0);
        break;
    }
    date_difference = Math.floor(date_difference / divisor);
		if(!timeHTML.equals("You have lived " + date_difference.toString() + " " + unit +" already")){
			daysOutput.innerHTML = "You have lived " + date_difference.toString() + " " + unit +" already";
		}

}
