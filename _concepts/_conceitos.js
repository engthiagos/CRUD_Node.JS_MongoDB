// const express = require("express")
// const app = express()
// app.use(express.json())
// /**Quando o express for anterior à VERSÃO 4
//  * bodyParser = require("body-parser");
//  * app.use(bodyParser.json());
//  */
// const sayHi = (req, res) => {             
//   res.send("**** Teste!!!! ****")
// }
// // Tradução: Oi SERVER esculte as solicitações em '/' e chame a função sayHi se uma solicitação for feita
// app.get("/", sayHi)
// /** app.get fornece:
//  *      - request (req)   ->  Contem todos os dados enviados pelo CLIENTE
//  *      - response (res)  ->  Todos os métodos que é possível responder ao CLIENTE
// */
// // Tradução: SERVER escuta as solicitações de POST. 
// app.post("/add", (req, res) => {
//   const { a, b } = req.body
//   res.send(`The sum is: ${a + b}`)
// })
// app.listen(5000, () => {
//   console.log(`Server is running on port 5000.`)
// })

// com formulário html.
const path = require("path");
const express = require("express");
// A linha a seguir não é necessária a partir da versão 4 do Express
const bodyParser = require("body-parser");

const app = express();

// A partir da versão 4 do Express, é possível substituir a linha abaixo por app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
