const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json());
app.use(cors())

const gets = require('./routes/api/gets')
const teams = require('./routes/api/teams')

app.use('/api/gets', gets);
app.use('/api/teams', teams)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started"))