// import ENVIRONMENT VARIABLES
require('dotenv').config()
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbID = process.env.DB_ID
const mongoose = require('mongoose')
async function main() {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.spcsoty.mongodb.net/?retryWrites=true&w=majority`)
    console.log('**** Banco de Dados "PARTYTIME" conectado ****')
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}
module.exports = main