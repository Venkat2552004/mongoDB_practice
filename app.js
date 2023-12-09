const { MongoClient } = require('mongodb')
const uri = require('./atlas_uri')

const client = new MongoClient(uri)
const dbname = "MongoPractice"

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log(`Successfully connected to database named ${dbname}`)
    }
    catch (err) {
        console.log(`Error connecting to database : ${err}`)
    }
};

const main = async () => {
    try {
        await connectToDatabase();
    }
    catch (err) {
        console.log(`Error connecting to database : ${err}`)
    }
    finally {
        await client.close()
    }
};

main()