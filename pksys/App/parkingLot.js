module.exports = function (num){
	var size = num;
	var occupied = 0;
	var spot = [];
	var success = 1;
	var fail = -1;
	var spaceAvailable = true;
	var Slots = new slot(size);
	
	var isFull = function (){
		if(occupied < size){
			spaceAvailable=true;
			return false;
		}
		else{
			spaceAvailable = false;
			return true;
		}
	};

	var park = function (name) {
		if(spaceAvailable){
		    var flag = fail;
		    /*while(place < size && spot[place] != null)//&& spaceAvailable) 
			{
				place++;
			}*/
			var place = Slots.getSlot();
			if(place < size){
		    	spot[name] = place; 
		    	occupied++;
		    	flag = success;
		    	isFull();
			}
			if(flag == success)
				return place;


		    /*if(occupied == size && flag == success)
		    	return "full";
		    else if(occupied == size && flag != success)
		    	return "no space";
		    else if(flag == success)
		    	return place;
			else
				return "no space";*/
		}
		else
			return fail; //Lot Full (-1)
	};

	var findCar = function (name){
		if(spot[name]){
			return spot[name];
		}
		return fail;
		/*var carFinder=0;
		while(carFinder < size && spot[carFinder]!=name){
			carFinder ++;
		}
		if(carFinder < size)
			return carFinder;
		else
			return -1;*/
	};	

	var unpark= function(name){
		  
		if(spot[name]){
			Slots.addSlot(spot[name]);
			delete(spot[name]);
			return true;
		}
		return false;
	};

	return {
		findCar: findCar,
		//parkAssistant: parkAssistant,
		//isEmpty: isEmpty,
		isFull: isFull,
		park: park,
		unpark:unpark
	};
}

var slot = function(num){
	var freeSlot = "";
	var size = num;
	
	for(initialiser = 0; initialiser < size; initialiser++){
		freeSlot+=initialiser+" ";
	}
	

	var getSlot = function (){
		var slot = freeSlot.split(" ");
		freeSlot = freeSlot.replace(slot[0]+" ","");
		return slot[0];
	};

	var addSlot = function(pos){
		freeSlot+=pos+" ";
	};
	return {
		getSlot: getSlot,
		addSlot: addSlot
	}
}

/*	var unpark = function(name){
		var carFinder = findCar(name);
		var place = 0;

		if(carFinder != -1){		
			spot[carFinder] = null;
			addSpot(carFinder);
			occupied --;
			return success;
		}
		else{
			return fail;
		}
		
	};

	var checkCar = function (num){
		return spot[num];
	};

	var isEmpty = function (num) {
		if(spot[num] != null){
			return false;
		}
		else
			return true;
	};

	var parkAssistant = function (name,num){
		var checkSpot = isEmpty(num);
		if(num >= size)
			return "unavilable slot";
		
		if(checkSpot){
			spot[num] = name;
			occupied ++;
			if(occupied == size)
				return "full";
			else
				return "success";
		}
		
		return "occupied";  
	};
*/

