import mysql from "mysql2/promise";



    const pool = mysql.createPool({
        host: 'localhost',
        port : 3306,
        user : 'root',
        password : 'Indiaa*83',
        database : 'empdb',
        connectionLimit : 10

    });

    export async function executeQuery(query, params = []){
        const [rows] = await pool.execute(query, params);
        return rows;
    }
