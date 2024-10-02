const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

// 1) MIDDLEWARES
app.use(morgan("dev"));

// CONTINUAR EM 61=> IMPLEMENTING THE 'USERS' ROUTES

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const clients = JSON.parse(fs.readFileSync(`${__dirname}/data/clients.json`));

// 2) ROUTE HANDLERS
const getAllClients = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: "success",
    requestAt: req.requestTime,
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

// 3) ROUTES
app.route("/api/v1/clients").get(getAllClients).post(createClient);
app
  .route("/api/v1/clients/:id")
  .get(getClient)
  .patch(updateClient)
  .delete(deleteClient);

// 4) START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
