const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { soma, divisao, multiplicacao } = require("./operacoes");
const port = 3001;

app.use(bodyParser.json());

app.get("/", function (_, res) {
  res.send("Olá mundo");
});

app.post("/soma", (req, res) => {
  const { a, b } = req.body;
  const resultado = soma(a, b);
  res.send(`Soma de ${a} e ${b} é ${resultado}`);
});

app.post("/divisao", (req, res) => {
  const { a, b } = req.body;
  const resultado = divisao(a, b);
  res.send(`Divisão de ${a} e ${b} é ${resultado}`);
});

app.post("/multiplicacao", (req, res) => {
  const { a, b } = req.body;
  const resultado = multiplicacao(a, b);
  res.send(`Multiplicação de ${a} e ${b} é ${resultado}`);
});

app.listen(port, function () {
  console.log(`Servidor http://localhost:${port}/`);
});
