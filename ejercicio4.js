const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/convierte/', (req, res) => {
  const dolares = Number(req.query.dolares); // Cambiamos el nombre del parámetro a 'dolares'
  const euros = dolares / 1.2; // Cambiamos la fórmula para convertir de dólares a euros
  const cadena = `<h2>En euros son: ${euros}</h2>`; // Actualizamos el mensaje
  res.send(cadena);
});

app.listen(5000, () => console.log('Server ready on localhost:5000'));
