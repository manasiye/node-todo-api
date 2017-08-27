// const MongoClient = require('mongodb').MongoClient;
//same as below
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mondodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59a314a152a8b41f8246bbc5')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('59a314a152a8b41f8246bbc5')
    // }).count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count:${count}`);
    // }, (err) => {
    //     console.log('unable to fetch', err);
    // });

    // db.collection('Users').find({
    //     name: 'Manasi'
    // }).count().then((count) => {
    //     console.log('Users');
    //     console.log(`Users count:${count}`);
    // }, (err) => {
    //     console.log('unable to fetch', err);
    // });

    db.collection('Users').find({
        name: 'Manasi'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch', err);
    });

    // db.close();
});