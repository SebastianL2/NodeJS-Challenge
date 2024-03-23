import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import { server, mongoDb, logger } from '../../config/production.js';
import { serverTest, mongoDbtest } from '../../config/testPu.js';

const mongitoDb = process.env.NODE_ENV === 'test' ? mongoDbtest : mongoDb;


const uri = process.env.mongoURI;
       

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})




export default client;