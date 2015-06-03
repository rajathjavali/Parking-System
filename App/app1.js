
var spot;
var size;
exports.initialize = function (num)
{
	size = num;
	spot = new Array(num);
	for(i=0;i<size;i++)
	{
		spot[i]=null;
	}	
}

exports.park= function (name) {
		
    //var name = document.getElementById('park').value;        
    var place = 0;
    while(place <size && spot[place] != null) {place++;}

    if (place<size) {
        spot[place] = name; 
        //return place;
        return 1;
    }
    else
    	return -1;

}

exports.unpark = function (name){
	var i=0;
	var place = 0;
	while(i<size && spot[i]!=name){
		i++;
	}
	if(i<size){		
		spot[i] = null;
		return 1;
	}
	else
		return 0;

}