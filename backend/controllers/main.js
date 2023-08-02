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
        const thumbnail = $(el).find('span').attr('data-img-url');

        obj.headline.push({ title, link, endpoint, thumbnail });
    });

    $(main).find('#tdi_9').find('div.td_module_flex_7').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('span').attr('data-img-url');

        obj.headline.push({ title, link, endpoint, thumbnail });
    });

    obj.berita_terbaru = [];
    $(main).find('#tdi_14').find('.td-block-span6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('span').attr('data-img-url');

        obj.berita_terbaru.push({ title, link, endpoint, thumbnail });
    });

    obj.metropolis = [];
    $(main).find('#tdi_16').find('.td_module_flex').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('span').attr('data-img-url');

        obj.metropolis.push({ title, link, endpoint, thumbnail });
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

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @returns 
 */
const categories = async (req, res) => {
    const response = await tools.get({ url: '' });
    const $ = tools.loadCheerio({ html: response.data });
    const main = $('body.home');

    const arr_categories = [];
    $(main).find('.td-pb-padding-side').find('li').each((i, el) => {
        const title = $(el).find('a').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        arr_categories.push({ title, link, endpoint });
    });

    return res.json({
        success: true,
        data: arr_categories
    });
};

/**
 * 
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @returns <Promise>
 */
const category = async (req, res) => {
    const { category, option } = req.params;
    const { page = 1 } = req.query;
    if (!category) return res.json({ success: false, message: 'Category is required' }, 400);

    let URL = null;
    if (option && page)
        URL = `category/${category}/${option}/page/${page}`;
    else if (option)
        URL = `category/${category}/${option}`;
    else if (page)
        URL = `category/${category}/page/${page}`;
    else
        URL = `category/${category}`;

    const response = await tools.get({ url: URL });
    const $ = tools.loadCheerio({ html: response.data });
    const main = $('body.archive');

    const obj = {};

    obj.discovery = [];
    $(main).find('#tdi_9').find('.td_module_mx5').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('img').attr('data-img-url');

        obj.discovery.push({ title, link, endpoint, thumbnail });
    });

    $(main).find('#tdi_9').find('.td_module_mx6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('img').attr('data-img-url');

        obj.discovery.push({ title, link, endpoint, thumbnail });
    });

    obj.news = [];
    $(main).find('.td-ss-main-content').find('.td_module_1').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('img').attr('data-img-url');

        obj.news.push({ title, link, endpoint, thumbnail });
    });

    obj.pagination = [];
    $(main).find('.page-nav').children().each((i, el) => {
        if (el.name === 'span')
            obj.pagination.push({ title: $(el).text(), link: null, endpoint: null });
        else if (el.name === 'a')
            obj.pagination.push({ title: $(el).attr('title'), link: $(el).attr('href'), endpoint: $(el).attr('href').replace(tools.BASE_URL, '') });
    });

    return res.json({
        success: true,
        data: obj
    });
};


module.exports = {
    home,
    categories,
    category
};
