require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const app = express();

const rotaPerfil = require('./rotas/rotas.perfil');
const rotaTech = require('./rotas/rotas.tecnologia');
const rotaProjeto = require('./rotas/rotas.projeto');
const openapiSpec = require('./docs/openapi');
const { tratarErro, rotaNaoEncontrada } = require('./middlewares/tratadorErros');

const dominiosPermitidos = [
  'https://meusite.com',
  'http://localhost:3000',
];

app.use(cors({
  origin: dominiosPermitidos,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));
app.get('/api/docs.json', (req, res) => res.json(openapiSpec));
app.use('/api', [rotaPerfil, rotaTech, rotaProjeto]);


app.use(rotaNaoEncontrada);
app.use(tratarErro);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Documentação disponível em http://localhost:${PORT}/api/docs`);
});
