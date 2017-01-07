conn = new Mongo();
db = conn.getDB('naked-nudeles');

db.dropDatabase();

db.createCollection('docs');

db.docs.insert({
  "doc" : {
    id: 1,
    img: 'https://s-media-cache-ak0.pinimg.com/originals/92/bd/6a/92bd6aea2a5bc1c751a8bbf096fc959f.jpg',
    rating: 0,
    description: 'Naked Nudeles',
  }
});

print ('docs database');

cursor = db.docs.find();
while (cursor.hasNext()){
  printjson(cursor.next());
}

db.docs.find();