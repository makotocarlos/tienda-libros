/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Controlador de productos
 * Este archivo define los controladores de productos
 */

const { response, request } = require('express');

const ShowProductos = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar productos"
    });
};

const AddProducto = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de agregar producto"
    });
};

const ShowProducto = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar un producto"
    });
};

const EditProducto = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de editar producto"
    });
};

const DeleteProducto = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de eliminar producto"
    });
};

module.exports = {
    AddProducto,
    ShowProductos,
    ShowProducto,
    EditProducto,
    DeleteProducto
};