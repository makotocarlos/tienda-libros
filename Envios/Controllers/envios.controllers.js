/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Controlador de envios
 * Este archivo define los controladores de envios
 */

const { response, request } = require('express');

const ShowEnvios = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar envios"
    });
};

const AddEnvio = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de agregar envio"
    });
};

const ShowEnvio = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar un envio"
    });
};

const EditEnvio = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de editar envio"
    });
};

const DeleteEnvio = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de eliminar envio"
    });
};

module.exports = {
    AddEnvio,
    ShowEnvios,
    ShowEnvio,
    EditEnvio,
    DeleteEnvio
};