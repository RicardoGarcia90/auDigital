const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

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

app.get('/api/v1/clients/:id', (req, res) => {
  const id = req.params.id * 1;
  const client = clients.find((el) => el.id === id);

  if (!client) {
    return res.status(404).json({ status: 'fail', message: 'Invalid Id' });
  }

  res.status(200).json({
    status: 'success',
    data: {
      client,
    },
  });
});

// CONTINUAR EM 55 => HANDLING PATCH REQUESTS

app.post('/api/v1/clients', (req, res) => {
  // console.log(req.body);

  const newId = clients[clients.length - 1].id + 1;
  const newClient = Object.assign({ id: newId }, req.body);

  clients.push(newClient);

  fs.writeFile(
    `${__dirname}/data/clients.json`,
    JSON.stringify(clients),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          client: newClient,
        },
      });
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
