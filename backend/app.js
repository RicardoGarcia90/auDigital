const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const clients = JSON.parse(fs.readFileSync(`${__dirname}/data/clients.json`));

const getAllClients = (req, res) => {
  res.status(200).json({
    status: "success",
    results: clients.length,
    data: {
      clients,
    },
  });
};

const getClient = (req, res) => {
  const id = req.params.id * 1; //*1 converte para Number
  const client = clients.find((el) => el.id === id);

  if (!client) {
    return res.status(404).json({ status: "fail", message: "Invalid Id" });
  }

  res.status(200).json({
    status: "success",
    data: {
      client,
    },
  });
};

const createClient = (req, res) => {
  // console.log(req.body);

  const newId = clients[clients.length - 1].id + 1;
  const newClient = Object.assign({ id: newId }, req.body);

  clients.push(newClient);

  fs.writeFile(
    `${__dirname}/data/clients.json`,
    JSON.stringify(clients),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          client: newClient,
        },
      });
    }
  );
};

const updateClient = (req, res) => {
  const id = req.params.id * 1; //*1 converte para Number
  const client = clients.find((el) => el.id === id);

  if (!client) {
    return res.status(404).json({ status: "fail", message: "Invalid Id" });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Update tour here...>",
    },
  });
};

const deleteClient = (req, res) => {
  const id = req.params.id * 1; //*1 converte para Number
  const client = clients.find((el) => el.id === id);

  if (!client) {
    return res.status(404).json({ status: "fail", message: "Invalid Id" });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};

// app.get("/api/v1/clients", getAllClients);
// app.post("/api/v1/clients", createClient);
// app.get("/api/v1/clients/:id", getClient);
// app.patch("/api/v1/clients/:id", updateClient);
// app.delete("/api/v1/clients/:id", deleteClient);

app.route("/api/v1/clients").get(getAllClients).post(createClient);
app
  .route("/api/v1/clients/:id")
  .get(getClient)
  .patch(updateClient)
  .delete(deleteClient);

// CONTINUAR EM AULA 59 => CREATING OUR OWN MIDDLEWARE

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
