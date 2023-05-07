"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const motoristas_router_1 = __importDefault(require("./routers/motoristas.router"));
/*import profilesRouter from "./routers/profiles.router"
import contentRouter from './routers/content.router';
import categoriesRouter from './routers/categories.router'*/
const database_1 = require("./modules/database");
dotenv_1.default.config();
const database = new database_1.Database();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/motoristas', motoristas_router_1.default);
/*app.use('/profiles', profilesRouter);
app.use('/content', contentRouter);
app.use('/categories', categoriesRouter);*/
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server is running');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
