import { sql } from './db.js'

const createTable = async () => {
  await sql`
    CREATE TABLE videos (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      duration INTEGER NOT NULL
    );
    `
  console.log('Tabela "videos" criada com sucesso.');
};

createTable();