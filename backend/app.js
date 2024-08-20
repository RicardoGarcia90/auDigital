const fs = require('fs');
const express = require('express');

const app = express();

const clients = JSON.parse(fs.readFileSync(`${__dirname}/data/clients.json`));

app.get('/api/v1/clients', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: clients.length,
    data: {
      clients,
    },
  });
});

// CONTINUAR EM 53-HANDING POST REQUESTS

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
