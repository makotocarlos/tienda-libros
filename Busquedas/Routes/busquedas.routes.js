
/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de busqueda
 * Este archivo define las rutas de busqueda
 */

const { Router } = require('express');

const router = Router();

/**
 * Importando los métodos
 */

const { AddBusqueda, ShowBusquedas, DeleteBusqueda, EditBusqueda, ShowBusqueda } = require('../Controllers/busquedas.controllers');

/**
 * Rutas
 */
router.get('/', ShowBusquedas);
router.post('/', AddBusqueda);
router.delete('/', DeleteBusqueda);
router.put('/', EditBusqueda);
router.get('/:id', ShowBusqueda);

module.exports = router;