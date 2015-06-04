
//var expect = require("chai").expect;
var parkingSystem = require('parkingLot1.js');
var parkingLot1 = parkingSystem(3);
var success = 1;
function parkCar() {
	var carName = document.getElementById('value').value;
	var status = parkingLot1.park(carName);
	if(status == success){
		alert("Parking Successfull");
	}
	else
		alert("Parking Failed");
}
function unparkCar(){
	var carName = document.getElementById('value').value;
	var status = parkingLot1.unpark(carName);
	if(status == success){
		alert("Unparking Successfull");
	}
	else
		alert("Car Not found");
}