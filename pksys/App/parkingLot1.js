
module.exports = function (num){
	var size = num;
	var spot = new Array(num);
	var success = 1;
	var fail = -1;

	var park= function (name) {
	  
	    var place = 0;
	    while(place < size && spot[place] != null) {place++;}

	    if (place < size) {
	        spot[place] = name; 

	        return success;
	    }
	    else {
	    	//return size;
	    	return fail;
	    }

	};

	var unpark= function(name){
		  
		var i=0;
		var place = 0;
		while(i< size && spot[i]!=name){
			i++;
		}
		if(i<size){		
			spot[i] = null;
			return success;
		}
		else{
			return fail;
		}
		
	};

	return {
		park: park,
		unpark:unpark
	};
}
