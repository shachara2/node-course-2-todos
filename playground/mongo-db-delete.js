//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('unable to connect to db server');

    console.log('connected to db service');
    const db = client.db('TodoApp');

    //delete many

    // db.collection('Todos').deleteMany({ test: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
    //     console.log(result);
    // })

    db.collection('Users').aggregate(
        [
            { $match: {} },
            { $group: { _id: "$name", total: { $sum: 1 } } }
        ],
        (err, result) => {
            console.log(err);

            result.toArray().then( (res) => {
                console.log(res);
                
            })
        });
    //client.close();
});