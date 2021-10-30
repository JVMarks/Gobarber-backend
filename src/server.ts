import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🥡🍱Server started on port 3333');
});

/*
yarn init -y
yarn add typescript -D
yarn add express
yarn add -D @types/express
yarn tsc --init
yarn tsc


 yarn  add prettier eslint-config-prettier eslint-plugin-prettier -D

DESENVOLVIMENTO USAMOS O
 yarn add ts-node-dev -D

EDITOR CONFIG
SERVE PARA AJUDAR O TIME

ESLINT
NÃO TEM DESCULPA TEM QUE USAR


docker stop e7e9151d5174
*/
