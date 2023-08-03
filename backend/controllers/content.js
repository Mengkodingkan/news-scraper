const { Request, Response } = require('express');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const news = (req, res) => {
    const { category, option1, option2 } = req.params;
};

module.exports = { news };
