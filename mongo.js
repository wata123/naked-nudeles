conn = new Mongo();
db = conn.getDB('naked-nudeles');

db.dropDatabase();

db.createCollection('docs');

db.docs.insert([{
    id: 1,
    img: './imgs/boo.jpg',
    rating: 5,
    description: 'Nookake',
  }, {
    id: 2,
    img: './imgs/censored.jpg',
    rating: 3,
    description: 'Hairy Noodle',
  }, {
    id: 3,
    img: './imgs/scurd.jpg',
    rating: 4,
    description: 'Spooning',
  }, {
    id: 4,
    img: './imgs/wrecking-noodles.jpg',
    rating: 5,
    description: 'Wrecking Noodle',
  }, {
    id: 5,
    img: './imgs/sarahmarshall.jpg',
    rating: 2,
    description: 'Noodle Marshall',
  }, {
    id: 6,
    img: './imgs/noodle-blum.jpg',
    rating: 4,
    description: 'Jurassic Noodle',
  }, {
    id: 7,
    img: './imgs/noodle-sandre.jpg',
    rating: 1,
    description: 'Noodlesandre',
  }, {
    id: 8,
    img: './imgs/american-noodles.jpg',
    rating: 4,
    description: 'American Noodles',
  }, {
    id: 9,
    img: './imgs/dancer.jpg',
    rating: 5,
    description: 'Make it RAIN',
}]);

print ('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();