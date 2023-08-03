const { Request, Response } = require('express');

/**
 * 
 * @param {Request} req 
 * @param {Response} res
 * @param {Function} next
 */
module.exports = (req, res, next) => {
    next();
};