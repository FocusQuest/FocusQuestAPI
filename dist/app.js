"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createHttpError = require("http-errors");
const express = require('express');
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// const morgan = require('morgan');
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: 'O app em TS está funcionando! 🐻' });
}));
app.use('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    next(new createHttpError.NotFound());
}));
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message
    });
};
app.use(errorHandler);
// app.use('/api', require('./routes/api.route'));
const PORT = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
