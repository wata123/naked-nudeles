conn = new Mongo();
db = conn.getDB('naked-nudeles');

db.dropDatabase();

db.createCollection('docs');

db.docs.insert([{
    id: 1,
    img: './imgs/boo.jpg',
    rating: 5,
    description: 'Naked Nudeles',
  }, {
    id: 2,
    img: './imgs/censored.jpg',
    rating: 3,
    description: 'Naked Nudeles 2',
  }, {
    id: 3,
    img: './imgs/scurd.jpg',
    rating: 4,
    description: 'Naked Nudeles',
  }, {
    id: 4,
    img: './imgs/wrecking-noodles.jpg',
    rating: 5,
    description: 'Naked Nudeles',
  }, {
    id: 5,
    img: './imgs/sarahmarshall.jpg',
    rating: 2,
    description: 'Naked Nudeles 2',
  }, {
    id: 6,
    img: './imgs/noodle-blum.jpg',
    rating: 4,
    description: 'Naked Nudeles',
  }, {
    id: 7,
    img: './imgs/noodle-sandre.jpg',
    rating: 1,
    description: 'Naked Nudeles',
  }, {
    id: 8,
    img: './imgs/american-noodles.jpg',
    rating: 4,
    description: 'Naked Nudeles',
}]);

print ('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();