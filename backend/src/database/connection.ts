import 'dotenv/config'
import PG from "pg";

const {Pool} = PG;

export const pool = new Pool();