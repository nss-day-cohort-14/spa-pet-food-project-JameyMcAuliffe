
//Dog food XHR object
var dogRequest = new XMLHttpRequest();

//Event Listeners
dogRequest.addEventListener("load", test);

//Grab json data/ start
dogRequest.open("GET", "dog-food.json");
dogRequest.send();

//array declarations
var names = [];
var types = [];
var sizes = [];
var prices = [];



//Test function
function test() {

	//varaibl declarations
	var dogFood = JSON.parse(this.responseText);
	var container = document.getElementById("container");
	
	
	//loop to organize info into arrays
	for (var i = 0; i < dogFood.dog_brands.length; i++) {

		//brand names
		names.push(dogFood.dog_brands[i].name);

		for (var j = 0; j < dogFood.dog_brands.length; j++) {

		//types
		types.push(dogFood.dog_brands[i].types[j].type);

			for (var k = 0; k < dogFood.dog_brands.length; k++) {
			//sizes
			sizes.push(dogFood.dog_brands[i].types[j].volumes[k].name);
		
			//prices
			prices.push(dogFood.dog_brands[i].types[j].volumes[k].price);
			}
		}
		
	}


	console.log(names);
	console.log(types);
	console.log(sizes);
	console.log(prices);



	//inserting data into html
	document.getElementById("chuck-h1").innerHTML = names[0];
	document.getElementById("purina-h1").innerHTML = names[1];
	document.getElementById("chuck-type1").innerHTML = types[0];
	document.getElementById("chuck-type2").innerHTML = types[1];
	document.getElementById("purina-type1").innerHTML = types[2];
	document.getElementById("purina-type2").innerHTML = types[3];
	document.getElementById("natural-size1").innerHTML = sizes[0] + ": " + prices[0];
	document.getElementById("natural-size2").innerHTML = sizes[1] + ": " + prices[1];
	document.getElementById("standard-size1").innerHTML = sizes[2] + ": " + prices[2];
	document.getElementById("standard-size2").innerHTML = sizes[3] + ": " + prices[3];
	document.getElementById("puppy-size1").innerHTML = sizes[4] + ": " + prices[4];
	document.getElementById("puppy-size2").innerHTML = sizes[5] + ": " + prices[5];
	document.getElementById("purina-standard-size1").innerHTML = sizes[6] + ": " + prices[6];
	document.getElementById("purina-standard-size2").innerHTML = sizes[7] + ": " + prices[7];





};




