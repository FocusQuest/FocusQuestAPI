import { NextFunction, Response, Request, Application, ErrorRequestHandler } from "express";
import createHttpError = require("http-errors");
import { config } from 'dotenv'

config();


const cors = require('cors');

const express = require('express');

// const morgan = require('morgan');

const app: Application = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));

// Enable CORS
app.use(cors());

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: 'O app em TS está funcionando! 🐻' });
});


const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        status: err.status || 500,
        message: err.message
    });
};

app.use('/', require('./routes/api.route'));

app.use('/', async (req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound())
  });

app.use(errorHandler)

const PORT: Number = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
 
