import pg from "pg";

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

export default db;
