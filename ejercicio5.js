const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/calcular-iva', (req, res) => {
  const valor = Number(req.query.valor); // Obtener el valor numérico desde la URL
  const iva = valor * (21 / 100); // Calcular el IVA (21% del valor)
  const resultado = `El IVA correspondiente es: ${iva}`;
  res.send(resultado);
});

app.listen(5000, () => console.log('Servidor listo en localhost:5000'));
