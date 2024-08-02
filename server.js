const dotenv = require ('dotenv');

dotenv.config();

const express = require ('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

const db = require('./config/db')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res) => (
    res.send('Servidor está rodando')
));

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>(
    console.log(`Servidor rodando na porta ${PORT}`)
));