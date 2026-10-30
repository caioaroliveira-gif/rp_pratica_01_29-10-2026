import { Router, type Request, type Response } from "express";
import { clienteService } from "../service/cliente.service.js";
import { CriarCliente } from "../types/cliente.js";

export const ClienteRouter = Router();

ClienteRouter.get("/", async (request: Request, response: Response) => {
  const cliente = await clienteService.getAll();
  if (response.json(cliente)) {
  } else {
    response.status(500).json("Erro interno");
  }
});

ClienteRouter.post("/", async (request:Request, response: Response) => {
    const cliente = await clienteService.create(request.body.CriarCliente)
    try {
        return response.status(201).json(cliente)
    } catch (error) {
        response.status(500).json("Erro Interno")
    }
    
})
