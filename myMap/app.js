// The start of my map
async function getCoords(){
    
    let pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [(pos.coords.latitude), (pos.coords.longitude)]
}

function addMarkers(){
    for (var i = 0; i < this.businesses.length; i++){
        this.markers = L.marker([
            this.businesses[i].lat,
            this.businesses[i].long,
        ])
        .bindPopup(`<p1>${this.businesses[i].name}</p1>`)
        .addTo(this.map)
    }
}

function createMap(coords, place){
    //Create map

    var map = L.map('map').setView(coords, 13);
    //Load tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    //place.forEach(p => createMarker(p, map))

    const marker = L.marker([34.899658, -82.42444549999999]).bindPopup('<p1><b>You Are Here</b></p1>').openPopup().addTo(map)
}


async function getFoursquare(business) {
	const options = {
		method: 'GET',
		headers: {
		Accept: 'application/json',
		Authorization: 'fsq3ATzZbmcGhdeFafr73wZcnJ+LlN6bK+4dh19a7ClS4u8='
		}
	}
	let limit = 5
	let lat = myMap.coordinates[0]
	let lon = myMap.coordinates[1]
	let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=${business}&limit=${limit}&ll=${lat}%2C${lon}`, options)
	let data = await response.text()
	let parsedData = JSON.parse(data)
	let businesses = parsedData.results
	return businesses
}

async function main(){
    let coordinates = await getCoords()
    console.log("my coordinates", coordinates)
    createMap(coordinates)
}
main()




//const myMap = L.map('map', {
    //center: [34.899658, -82.42444549999999],
    //maxZoom: 19,
//});

//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//}).addTo(myMap);


//const marker = L.marker([34.899658, -82.42444549999999])
//marker.addTo(myMap).bindPopup('<p1><b>You Are Here</b></p1>').openPopup()

//async function getBusinesses(){
    //let businesses =[
        //{name:"Tomato Vine", lat:34.89745117941126, long:-82.43242733843488},
        //{name:"Family Dollor", lat:34.89438341627183, long:-82.43241873059593},
        //{name: "Little Caesars Pizza", lat:34.892593762473474, long:-82.39627410147826}
    //]
//}
