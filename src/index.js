const app = require('./app');

const port = 3034;

process.env.TZ = 'America/Campo_Grande';

process.env.ORA_SDTZ = 'UTC';

app.listen(port, () => console.log(`Aplicação rodando na porta: ${port}`));
