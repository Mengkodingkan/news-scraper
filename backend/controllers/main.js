const { Request, Response } = require('express');
const Tools = require('../tools');
const tools = new Tools();

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const home = async (req, res) => {
    const response = await tools.get({ url: '' });
    if (response.status !== 200) {
        return res.json({
            success: false,
            message: 'Error'
        });
    }

    const obj = {};
    const $ = tools.loadCheerio({ html: response.data });

    const main = $('body.home');

    obj.main_menu = [];
    $(main).find('#menu-main-menu-1').find('li').each((i, el) => {
        const title = $(el).find('a').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.main_menu.push({ title, link, endpoint });
    });


    res.json({
        success: true,
        data: obj
    });
};

const headline= async (req, res)=> {
    const response = await tools.get({ url: 'category/metropolis/headline' });
    if (response.status !== 200) {
        return res.json({
            success: false,
            message: 'Error'
        });
    }
    const obj = {}
    const $ = tools.loadCheerio({html: response.data});
    //penasaran gw sama response.data jadi iseng update :v
    res.json({
        success: true,
        data: response.data
    })

   
}


module.exports = {
    home,
    headline
};
