import mysql2 from 'mysql2/promise';

export default async function connect() {
    if (global.connection && global.connection.this.state !== 'disconnected')
        return global.connection;
    try{
        const mysql = mysql2;
        const connection = await mysql.createConnection("mysql://root:root@localhost:3306/universidade");
        console.log("Conectado ao DB mysql");
        global.connection = connection;
        return connection
    } catch(e){
        console.log("deu pau", e);
    }
}
