/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de productos
 * Este archivo define las rutas de productos
 */

const { Router } = require('express');

const router = Router();

/**
 * Importando los métodos
 */

const { AddProducto, ShowProductos, DeleteProducto, EditProducto, ShowProducto } = require('../Controllers/productos.controllers');

/**
 * Rutas
 */
router.get('/', ShowProductos);
router.post('/', AddProducto);
router.delete('/', DeleteProducto);
router.put('/', EditProducto);
router.get('/:id', ShowProducto);

module.exports = router;