const { Router } = require('express');
const router = Router();

const { getClients, getClientsById, createClients, updateClients, deleteClients} = require('../controllers/index.controllers')

router.get('/clients', getClients);

router.get('/clients/:id', getClientsById );

router.post('/clients', createClients);

router.put('/clients/:id', updateClients);

router.delete('/clients/:id', deleteClients);


module.exports = router;

