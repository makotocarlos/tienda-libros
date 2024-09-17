/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Controlador de rastreo
 * Este archivo define los controladores de rastreo
 */

const { response, request } = require('express');

const ShowRastreos = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar rastreos"
    });
};

const AddRastreo = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de agregar rastreo"
    });
};

const ShowRastreo = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar un rastreo"
    });
};

const EditRastreo = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de editar rastreo"
    });
};

const DeleteRastreo = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de eliminar rastreo"
    });
};

module.exports = {
    AddRastreo,
    ShowRastreos,
    ShowRastreo,
    EditRastreo,
    DeleteRastreo
};