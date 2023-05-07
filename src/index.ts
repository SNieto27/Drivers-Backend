import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import motoristasRouter from "./routers/motoristas.router"
/*import profilesRouter from "./routers/profiles.router"
import contentRouter from './routers/content.router';
import categoriesRouter from './routers/categories.router'*/
import { Database } from "./modules/database";

dotenv.config();
const database:Database = new Database();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/motoristas', motoristasRouter);
/*app.use('/profiles', profilesRouter);
app.use('/content', contentRouter);
app.use('/categories', categoriesRouter);*/

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});