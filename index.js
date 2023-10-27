
import express  from "express";
import cors from "cors";
import Connection from './database/db.js';
import Route from "./routes/route.js";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

Connection();

app.use('/', Route);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));



















