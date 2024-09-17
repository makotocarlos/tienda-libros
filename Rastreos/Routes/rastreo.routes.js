/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de rastreo
 * Este archivo define las rutas de rastreo
 */

const { Router } = require('express');

const router = Router();

/**
 * Importando los métodos
 */

const { AddRastreo, ShowRastreos, DeleteRastreo, EditRastreo, ShowRastreo } = require('../Controllers/rastreo.controllers');

/**
 * Rutas
 */
router.get('/', ShowRastreos);
router.post('/', AddRastreo);
router.delete('/', DeleteRastreo);
router.put('/', EditRastreo);
router.get('/:id', ShowRastreo);

module.exports = router;