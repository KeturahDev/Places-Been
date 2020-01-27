//places buisness logic ---------------------
function Places () {
  this.places = [];
};

Places.prototype.addPlace = function(place) {
  this.places.push(place);
  console.log('ahhhh push it');
};

// place buisness logic ---------------------
function Place (country, city, date, landmark, note) {
  this.country = country,
  this.city = city,
  this.date = date,
  this.landmark = landmark,
  this.note = note
}

var alaska = new Place('USA', 'Juno', 7 , 'Glacier'); 
var vegas = new Place('USA', 'vegas', 6 , 'Casino');

var places = new Places();
console.log('vegas',vegas);
places.addPlace(alaska); 
places.addPlace(vegas); 

console.log('Places', places);