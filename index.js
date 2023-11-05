import express  from "express";
import cors from "cors";
import Connection from './database/db.js';
import Route from "./routes/route.js";
import bodyParser from "body-parser";

const router = express.Router();

const PORT = process.env.PORT || 8000;

const app = express();

const corsOptions = {
  origin: 'https://realtimechatapplication1.vercel.app', 
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

Connection();

app.use('/', Route);


app.listen(PORT, () => console.log(`server is running on port ${PORT}`));



















