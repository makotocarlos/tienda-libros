/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Controlador de busqueda
 * Este archivo define los controladores de busqueda
 */

const { response, request } = require('express');

const ShowBusquedas = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar busquedas"
    });
};

const AddBusqueda = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de agregar busqueda"
    });
};

const ShowBusqueda = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar una busqueda"
    });
};

const EditBusqueda = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de editar busqueda"
    });
};

const DeleteBusqueda = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de eliminar busqueda"
    });
};

module.exports = {
    AddBusqueda,
    ShowBusquedas,
    ShowBusqueda,
    EditBusqueda,
    DeleteBusqueda
};