const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

const port = 5000;

const routes = require('./routes/routes');


app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(process.env.PORT || port, console.log(`rodando na porta ${port}!`));