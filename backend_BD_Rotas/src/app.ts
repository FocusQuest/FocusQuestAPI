import express, { Application, Request, Response, NextFunction } from 'express';
import * as createHttpError from 'http-errors';
import { ErrorRequestHandler } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send({ message: 'O app em TS está funcionando! 🐻' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

import apiRouter from './routes/api.router';
app.use('/', apiRouter);

app.use(errorHandler);

app.use(async (req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const PORT: number = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));