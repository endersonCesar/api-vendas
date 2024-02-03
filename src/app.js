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
const configuracaoRoute = require('./routes/cofiguracao/marca.route');
const produtoRoute = require('./routes/cofiguracao/produto.route');
app.use('/api/configuracao/marca',configuracaoRoute);
app.use('/api/configuracao/produto',produtoRoute);

module.exports = app;