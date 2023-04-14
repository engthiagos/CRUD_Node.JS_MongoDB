// import ENVIRONMENT VARIABLES
require('dotenv').config()
const dbProtocol = process.env.DB_PROTOCOL
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbConnectionOptions = process.env.DB_CONNECTION_OPTIONS
const dbID = process.env.DB_ID
// import MongoDB Drive
const { MongoClient, ServerApiVersion } = require("mongodb")
const uri = `${dbProtocol}://${dbUser}:${dbPassword}@${dbHost}/${dbConnectionOptions}`
// create MongoClient with more stable version
const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
// connect wiht MongoDB Drive
async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
    //   await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("**** Banco de Dados ${dbUser} conectado pelo MongoDB Driver ****");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


// MONGOOSE
const mongoose = require('mongoose')
async function main() {
    try {
        await mongoose.connect(`${dbProtocol}://${dbUser}:${dbPassword}@${dbHost}/${dbConnectionOptions}`)
    console.log(`**** Banco de Dados ${dbUser} conectado pelo MONGOOSE ****`)
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}
module.exports = main