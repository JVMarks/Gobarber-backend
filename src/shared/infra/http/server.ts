import 'reflect-metadata';
import 'dotenv/config';

import express, { NextFunction, Response } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter);
app.use(routes);

app.use(errors());

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

GIT
git rm --chached ormconfig.json

get-Process -Id (Get-NetTCPConnection -LocalPort 5432).OwningProcess
netstat -a -b
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d prostgres
docker run --name redis -p 6379:6379 -d -t redis:alpine
docker run --name mongodb -p 27017:27017 -d -t mongo

yarn dev:server
docker start e7e9151d5174
docker start mongodb
docker start redis


docker ps
docker ps -a
docker logs e7e9151d5174

docker stop e7e9151d5174

npm cache clean -f
yarn test --clearCache
*/
