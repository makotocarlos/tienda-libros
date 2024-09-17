/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Controlador de compras
 * Este archivo define los controladores de compras
 */

const { response, request } = require('express');

const ShowCompras = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar compras"
    });
};

const AddCompras = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de agregar compras"
    });
};

const ShowCompra = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar una compra"
    });
};

const EditCompras = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de editar compras"
    });
};

const DeleteCompras = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de eliminar compras"
    });
};

module.exports = {
    AddCompras,
    ShowCompras,
    ShowCompra,
    EditCompras,
    DeleteCompras
};
