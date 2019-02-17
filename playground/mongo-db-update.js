//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('unable to connect to db server');

    console.log('connected to db service');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5c66dfb63b8bfa4a20f6a1fc') },
        {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        })

        db.collection('Users').findOneAndUpdate({ _id: new ObjectID('5c66d0cd6607f9427c134bf7') },
        {
            $set: {
                name: 'Shachar'
            },
            $inc:{
                age: 1
            }
        },
        {
            returnOriginal: false
        }).then((res) => {
            console.log(res);
        })
    //client.close();
});