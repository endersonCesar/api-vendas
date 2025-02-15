const express = require('express');
const cors = require('cors');
let corsOptions = {
	origin: '*',
};


const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors(corsOptions));
app.use(function (err, req, res, next) {
	if (err) {
		console.log(err, 'err');
		return res.status(412).send({ error: err.message });
	}
	next();
});

const medicamentoRoute = require('./routes/cofiguracao/medicamento.route');
const estoqueRoute = require('./routes/estoque/estoque.route');
const vendasRoute = require('./routes/venda/venda.route');

app.use('/api/configuracao/medicamento',medicamentoRoute);
app.use('/api/estoque',estoqueRoute);
app.use('/api/vendas',vendasRoute);
module.exports = app;