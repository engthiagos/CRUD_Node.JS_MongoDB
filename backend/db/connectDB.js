const mongoose = require('mongoose');
async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://PARTYTIME:JreBTzlLvvQDDhE5@cluster0.spcsoty.mongodb.net/?retryWrites=true&w=majority"
            );
    console.log('**** Banco de Dados "PARTYTIME" conectado ****');
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}
module.exports = main;