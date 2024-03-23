import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import { server, mongoDb, logger } from '../../config/production.js';
import { serverTest, mongoDbtest } from '../../config/testPu.js';

const mongitoDb = process.env.NODE_ENV === 'test' ? mongoDbtest : mongoDb;


const uri = 'mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017/SebastianCely_Db_sneakers?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin';
       

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})




export default client;