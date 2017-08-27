const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mondodb server');
    }
    console.log('connected to mongodb server');

    //delete many

    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    //delete 1

    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })


    //find one and delete

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })


    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('59a31f6652a8b41f8246be19')
    // }).then((result) => {
    //     console.log(result);
    // })


    db.collection('Users').deleteMany({
        name: 'Manasi'
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});