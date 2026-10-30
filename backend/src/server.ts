import 'dotenv/config';
import express, {type Request, type Response} from "express";
import { ClienteRouter } from "./router/cliente.router.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/cliente", ClienteRouter)

app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})
