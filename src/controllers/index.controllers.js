//Conexion a postgres
const { Pool } = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'nodexpress',
    password: '12345678',
    port: 5432
})

//Logica del API. 
const getClients = async (req, res) => {
    const response = await pool.query('SELECT * FROM clients');
    res.status(200).json(response.rows);
}

const getClientsById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM clients WHERE id = $1', [id])
    res.json(response.rows);
}

const createClients = async (req, res) => {
    const { typeDocument, number, name, lastName, phone } = req.body
    const response = await pool.query('INSERT INTO clients (type_document, nro_document, first_name, last_name, number_phone ) VALUES ($1, $2, $3, $4, $5 ) RETURNING *',[typeDocument, number, name, lastName, phone])
    console.log(response);

    res.json({
        message: 'User added successfully',
        body: {
            user: {typeDocument, number, name, lastName, phone}
        }
    })
}


const updateClients = async (req, res) => {
    const id = req.params.id;
    const { typeDocument, number } = req.body;
    const response = await pool.query('UPDATE clients SET type_document = $1, nro_document = $2  WHERE id = $3',[typeDocument, number, id])
    //console.log(id, name, email);
    console.log(response);
    res.json('Clients Updated successfully')
}


const deleteClients = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query(' DELETE FROM clients WHERE id = $1', [id])
    console.log(response)
    res.json(`Clients ${id} deleted successfully`) ;
}

module.exports = {
    getClients,
    getClientsById,
    createClients,
    updateClients,
    deleteClients
}