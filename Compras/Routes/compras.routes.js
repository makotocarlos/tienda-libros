/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de compras
 * Este archivo define las rutas de compras
 */

const { Router } = require('express');

const router = Router();

/**
 * Importando los métodos
 */

const { AddCompras, ShowCompras, DeleteCompras, EditCompras, ShowCompra } = require('../Controllers/compras.controllers');

/**
 * Rutas
 */
router.get('/', ShowCompras);
router.post('/', AddCompras);
router.delete('/', DeleteCompras);
router.put('/', EditCompras);
router.get('/:id', ShowCompra);

module.exports = router;
