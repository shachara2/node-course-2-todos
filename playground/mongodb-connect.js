//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('unable to connect to db server');

    console.log('connected to db service');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
        
    }, (err) => {
        console.log('unable to fetch todos', err);
    });


    // db.collection('Todos').insertOne({
    //     text: 'do something',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //         return console.log('unable to connect to db server');
    //     console.log(JSON.stringify(result, undefined, 2));

    // });

    // db.collection('Users').insertOne({
    //     name: 'xoxo',
    //     age: 38,
    //     location: 'TLV'
    // }, (err, result) => {
    //     if (err)
    //         return console.log('unable to connect to db server');
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });
    //client.close();
});