const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mondodb server');
    }
    console.log('connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59a31d6f52a8b41f8246bd5c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('59a3114770ff3b142025ead8')
    // }, {
    //     $set: {
    //         name: 'Andrew'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59a326e952a8b41f8246c01e')
    }, {
        $set: {
            name: 'Jen'
        },
        $inc: {
            age: 3
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    //db.close();
});