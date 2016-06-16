
//XHR objects
var dogRequest = new XMLHttpRequest();
var catRequest = new XMLHttpRequest();

//Event Listeners
dogRequest.addEventListener("load", dogLoad);
catRequest.addEventListener("load", catLoad);

//Grab json data/ start
dogRequest.open("GET", "dog-food.json");
dogRequest.send();
catRequest.open("GET", "cat-food.json");
catRequest.send();

//Dog array declarations to organize json data
var names = [];
var types = [];
var sizes = [];
var prices = [];

//Cat array declarations
var catNames = [];
var catBreeds = [];
var catTypes = [];
var catSizes = [];
var catPrices = [];



//DogLoad function, pushing object property values into corresponding arrays
function dogLoad() {

	//varaible declarations
	var dogFood = JSON.parse(this.responseText);
	var container = document.getElementById("container");
	
	
	//loop to organize info into arrays
	for (var i = 0; i < dogFood.dog_brands.length; i++) {

		//brand names
		names.push(dogFood.dog_brands[i].name);

		for (var j = 0; j < dogFood.dog_brands[i].types.length; j++) {

		//types
		types.push(dogFood.dog_brands[i].types[j].type);

			for (var k = 0; k < dogFood.dog_brands[i].types[j].volumes.length; k++) {
			//sizes
			sizes.push(dogFood.dog_brands[i].types[j].volumes[k].name);
		
			//prices
			prices.push(dogFood.dog_brands[i].types[j].volumes[k].price);
			}
		}
		
	}

	//inserting dog food data from arrays into the dom
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



//catLoad function, pushing object property values into corresponding arrays
function catLoad() {

	//Variable declarations
	var catFood = JSON.parse(this.responseText);
	var container = document.getElementById("cat-container");

	//loop to organize info into arrays
	for (var i = 0; i < catFood.cat_brands.length; i++) {

		//Brand names
		catNames.push(catFood.cat_brands[i].brand_name);

		for (var j = 0; j < catFood.cat_brands[i].breeds.length; j++) {

			//Breed names
			catBreeds.push(catFood.cat_brands[i].breeds[j].breed_name);

		}

		for (var k = 0; k < catFood.cat_brands[i].types.length; k++) {
			
			//Brand types
			catTypes.push(catFood.cat_brands[i].types[k].type);

			//sizes and prices
			for(var l = 0; l < catFood.cat_brands[i].types[k].volumes.length; l++) {
				catSizes.push(catFood.cat_brands[i].types[k].volumes[l].volume);
				catPrices.push(catFood.cat_brands[i].types[k].volumes[l].price);
			}

		}
	}

	//Inserting cat data from arrays into the dom
	document.getElementById("purrina-h1").innerHTML = catNames[0];
	document.getElementById("purrina-breeds").innerHTML = catBreeds[0] + ",  " + catBreeds[1] + ",  " + catBreeds[2] + ",  " + catBreeds[3];
	document.getElementById("purrina-type1").innerHTML = catTypes[0];
	document.getElementById("purrina-kitten-1").innerHTML = catSizes[0] + ": " + catPrices[0];
	document.getElementById("purrina-kitten-2").innerHTML = catSizes[1] + ": " + catPrices[1];
	document.getElementById("purrina-kitten-3").innerHTML = catSizes[2] + ": " + catPrices[2];
	document.getElementById("purrina-type2").innerHTML = catTypes[1];
	document.getElementById("elite-1").innerHTML = catSizes[3] + ": " + catPrices[3];
	document.getElementById("elite-2").innerHTML = catSizes[4] + ": " + catPrices[4];

	document.getElementById("meow-meal-h1").innerHTML = catNames[1];
	document.getElementById("meow-meal-breeds").innerHTML = catBreeds[4] + ",  " + catBreeds[5] + ",  " + catBreeds[6] + ",  " + catBreeds[7];
 	document.getElementById("meow-meal-type1").innerHTML = catTypes[2];
 	document.getElementById("meow-meal-kitten-1").innerHTML = catSizes[5] + ": " + catPrices[5];
 	document.getElementById("meow-meal-kitten-2").innerHTML = catSizes[6] + ": " + catPrices[6];
 	document.getElementById("meow-meal-type2").innerHTML = catTypes[3];
 	document.getElementById("adult-1").innerHTML = catSizes[7] + ": " + catPrices[7];
 	document.getElementById("adult-2").innerHTML = catSizes[8] + ": " + catPrices[8];
};




