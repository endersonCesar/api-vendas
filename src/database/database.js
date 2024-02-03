const { Pool, types } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

  const pool = new Pool({
    max: 100, //Numero máximo de clients na pool
    connectionTimeoutMillis: 1000 * 60 * 60, //Timeout quando o client tenta conectar na pool
    user: 'postgres',
    password: 'root',
    host:'localhost',
    database:'estoque',
    port:'5432'
  });

  pool.on('connect', (client) => {
    //client.on('notice', (msg) => console.warn('[POOL-CONEXÃO]:', msg));
    client.on('error', (error) => {
      console.log('[Api-Pericia] Ocorreu um erro no client da pool');
      console.log(error);
      client.release(true);
    });
  });

  pool.on('remove', () => {
    //console.log('Client desconectado da pool!', contadoor);
  });
  
  module.exports = {
    query: async (text, params) => await pool.query(text, params),
    connect: async () => await pool.connect(),
  };
  