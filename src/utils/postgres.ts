import { Pool } from "pg";

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: process.env.NEXT_PRIVATE_DB_USER,
    password: process.env.NEXT_PRIVATE_DB_PASSWORD,
    database: process.env.DB_NAME,
});

(async () => {
    try {
        const client = await pool.connect();
        console.log("Connected to the database");
        const sql = `
            CREATE TABLE IF NOT EXISTS artists (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                profile VARCHAR(200),
                popularLevel INTEGER NOT NULL,
                email VARCHAR(50) NOT NULL
            )`;
        await client.query(sql);
        console.log("Table Created");
        client.release();
    } catch (err:any) {
        console.error("Database setup error:", err.message);
    }
})();

(async () => {
    try {
        const client = await pool.connect();
        console.log("Connected to the database");
        const sql = `
            CREATE TABLE IF NOT EXISTS albums (
                id SERIAL PRIMARY KEY,
                albumName VARCHAR(50) NOT NULL,
                artistName VARCHAR(200) NOT NULL,
                popularLevel INTEGER NOT NULL,
                email VARCHAR(50) NOT NULL
            )`;
        await client.query(sql);
        console.log("Table Created");
        client.release();
    } catch (err:any) {
        console.error("Database setup error:", err.message);
    }
})();

export default pool;
