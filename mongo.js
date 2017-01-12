conn = new Mongo();
db = conn.getDB('naked-nudeles');

db.dropDatabase();

db.createCollection('docs');

db.docs.insert([{
    id: 1,
    img: './imgs/boo.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Nookake',
    numRates: 0
  }, {
    id: 2,
    img: './imgs/censored.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Hairy Noodle',
    numRates: 0
  }, {
    id: 3,
    img: './imgs/scurd.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Spooning',
    numRates: 0
  }, {
    id: 4,
    img: './imgs/wrecking-noodles.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Wrecking Noodle',
    numRates: 0
  }, {
    id: 5,
    img: './imgs/sarahmarshall.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Noodle Marshall',
    numRates: 0
  }, {
    id: 6,
    img: './imgs/noodle-blum.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Jurassic Noodle',
    numRates: 0
  }, {
    id: 7,
    img: './imgs/noodle-sandre.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Noodlesandre',
    numRates: 0
  }, {
    id: 8,
    img: './imgs/american-noodles.jpg',
    rating: 0,
    overallRating: 0,
    description: 'American Noodles',
    numRates: 0
  }, {
    id: 9,
    img: './imgs/dancer.jpg',
    rating: 0,
    overallRating: 0,
    description: 'Make it RAIN',
    numRates: 0
}]);

print ('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();