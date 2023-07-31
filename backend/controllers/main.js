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

    obj.headline = [];
    $(main).find('#tdi_9').find('div.td_module_flex_6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.headline.push({ title, link, endpoint });
    });

    $(main).find('#tdi_9').find('div.td_module_flex_7').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.headline.push({ title, link, endpoint });
    });

    obj.berita_terbaru = [];
    $(main).find('#tdi_14').find('.td-block-span6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.berita_terbaru.push({ title, link, endpoint });
    });

    obj.metropolis = [];
    $(main).find('#tdi_16').find('.td_module_flex').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.metropolis.push({ title, link, endpoint });
    });

    obj.kategori = [];
    $(main).find('.td-pb-padding-side').find('li').each((i, el) => {
        const title = $(el).find('a').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.kategori.push({ title, link, endpoint });
    });

    res.json({
        success: true,
        data: obj
    });
};

const headline = async (req, res) => {
    const response = await tools.get({ url: 'category/metropolis/headline' });
    if (response.status !== 200) {
        return res.json({
            success: false,
            message: 'Error'
        });
    }
    const obj = {}
    const $ = tools.loadCheerio({ html: response.data });
    //penasaran gw sama response.data jadi iseng update :v
    const main = $('#tdi_9');

    obj.data = [];
    $(main).find('.td_module_mx5').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const thumbnail = $(el).find('img').attr('src');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.data.push({ title, link, thumbnail, endpoint });
    }
    );
    $(main).find('.td_module_mx6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const thumbnail = $(el).find('img').attr('src');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.data.push({ title, link, thumbnail, endpoint });
    });

    $(main).find('.td-ss-main-content').find('.td-block-span6').each((i, el) => {
        const title = $(el).find('.entry-title').text();
        const link = $(el).find('a').attr('href');
        const thumbnail = $(el).find('img').attr('src');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.data.push({ title, link, thumbnail, endpoint });
    });


    res.json({
        success: true,
        data: obj
    });


}


module.exports = {
    home,
    headline
};
