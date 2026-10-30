import { pool } from "../database/connection.js";
import { Cliente, CriarCliente } from "../types/cliente.js";

class ClienteService {
  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM cliente");
      return res.rows;
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: CriarCliente): Promise<Cliente> {
    const res = await pool.query(
      "INSERT INTO cliente (nome, telefone, dt_nascimento, email) VALUES ($1, $2, $3, $4) RETURNING *",
      [dados.nome, dados.telefone, dados.dt_nascimento, dados.email],
    );
    const cliente = res.rows[0];
    if (!cliente) {
      console.error("O banco não retornou o cliente cadastrado");
    }
    return cliente;
  }
}
export const clienteService = new ClienteService();
