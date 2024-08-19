const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server!', app: 'auDigital' });
});

// CONTINUAR EM AULA 51 - API AND RESTFULL API DESIGN

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
