// import ENVIRONMENT VARIABLES
require('dotenv').config()
const dbProtocol = process.env.DB_PROTOCOL
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbAuthMechanism = process.env.DB_AUTH_MECHANISM
const dbID = process.env.DB_ID
// import MongoDB Drive
const { MongoClient, ServerApiVersion } = require("mongodb")
const uri = `${dbProtocol}://${dbUser}:${dbPassword}@${dbHost}/?authMechanism=${dbAuthMechanism}`
// create MongoClient with more stable version
const client = new MongoClient(uri,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
// connect wiht MongoDB Drive
async function main() {
    try {
        await client.db("admin").command({ ping: 1 })
        const resMessage = `**** Banco de Dados ${dbUser} - CONECTADO ****`
        console.log(resMessage)
    } 
    catch (error) {
        const resMessage = `**** Banco de Dados ${dbUser} - NÃO CONECTADO ****`
        console.log(resMessage)
    }
    finally {
        await client.close();
      }
  }
  module.exports = main

// MONGOOSE
// const mongoose = require('mongoose')
// async function main() {
//     try {
//         await mongoose.connect(`${dbProtocol}://${dbUser}:${dbPassword}@${dbHost}/${dbAuthMechanism}`)
//     console.log(`**** Banco de Dados ${dbUser} conectado pelo MONGOOSE ****`)
//     } catch (error) {
//         console.log(`Erro: ${error.message}`)
//     }
// }
// module.exports = main
