const { Request, Response } = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * 
 * @param {Request} req 
 * @param {Response} res
 * @param {Function} next
 */
module.exports = async (req, res, next) => {
    const { category, option, option2 } = req.params;

    let endpoint = null;
    if (option && option2)
        endpoint = `${category}/${option}/${option2}`;
    else if (option)
        endpoint = `${category}/${option}`;
    else
        return res.json({ success: false, message: 'Invalid endpoint' }, 400);

    const news = await prisma.news.findFirst({
        where: {
            endpoint: endpoint
        }
    });

    if (!news) {
        next();
        return;
    }

    const createdAt = new Date(news.createdAt);
    const now = Date.now();

    // check if time more than 1 hour
    if (now - createdAt.getTime() > 3600000) {
        next();
        return;
    }

    res.json({
        success: true,
        data: JSON.parse(news.json)
    });
};