import 'reflect-metadata';

import express, { NextFunction, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import './database';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

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
