/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de envios
 * Este archivo define las rutas de envios
 */

const { Router } = require('express');

const router = Router();

/**
 * Importando los métodos
 */

const { AddEnvio, ShowEnvios, DeleteEnvio, EditEnvio, ShowEnvio } = require('../Controllers/envios.controllers');

/**
 * Rutas
 */
router.get('/', ShowEnvios);
router.post('/', AddEnvio);
router.delete('/', DeleteEnvio);
router.put('/', EditEnvio);
router.get('/:id', ShowEnvio);

module.exports = router;