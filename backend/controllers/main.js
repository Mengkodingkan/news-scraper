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
        const thumbnail = $(el).find('span').attr('data-img-url');
        const author = $(el).find('.td-editor-date').find('a').text();
        const date = $(el).find('.td-post-date').find('time').attr('datetime');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.headline.push({ title, thumbnail, author, date, link, endpoint });
    });

    $(main).find('#tdi_9').find('div.td_module_flex_7').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const author = $(el).find('.td-editor-date').find('a').text();
        const date = $(el).find('.td-post-date').find('time').attr('datetime');
        const thumbnail = $(el).find('span').attr('data-img-url');
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.headline.push({ title, thumbnail, author, date, link, endpoint });
    });

    obj.berita_terbaru = [];
    $(main).find('#tdi_14').find('.td-block-span6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('img').attr('data-src');
        const date = $(el).find('.td-post-date').find('time').attr('datetime');

        obj.berita_terbaru.push({ title, thumbnail, date, link, endpoint });
    });

    obj.metropolis = [];
    $(main).find('#tdi_16').find('.td_module_flex').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('span').attr('data-img-url');

        obj.metropolis.push({ title, link, endpoint, thumbnail });
    });

    obj.picks_editor = [];
    $(main).find('#tdi_120').find('.td-block-span12').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('img').attr('data-img-url');
        const date = $(el).find('.td-post-date').find('time').attr('datetime');

        obj.picks_editor.push({ title, thumbnail, date, link, endpoint });
    });

    obj.posting_populer = [];
    $(main).find('#tdi_121').find('.td-block-span12').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const thumbnail = $(el).find('img').attr('data-img-url');
        const date = $(el).find('.td-post-date').find('time').attr('datetime');

        obj.posting_populer.push({ title, thumbnail, date, link, endpoint });
    });

    obj.kategori = [];
    $(main).find('.td-pb-padding-side').find('li').each((i, el) => {
        const title = $(el).find('.td-cat-name').text();
        const count = parseInt($(el).find('.td-cat-no').text());
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.kategori.push({ title, count, link, endpoint });
    });

    res.json({
        success: true,
        data: obj
    });
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
const categories = async (req, res) => {
    const response = await tools.get({ url: '' });
    const $ = tools.loadCheerio({ html: response.data });
    const main = $('body.home');

    const arr_categories = [];
    $(main).find('.td-pb-padding-side').find('li').each((i, el) => {
        const title = $(el).find('.td-cat-name').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        const count = parseInt($(el).find('.td-cat-no').text());

        arr_categories.push({ title, link, count, endpoint });
    });

    return res.json({
        success: true,
        data: arr_categories
    });
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns <Promise>
 */
const category = async (req, res) => {
    const { category, option } = req.params;
    const { page = 1} = req.query;
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
        const thumbnail = $(el).find('img').attr('data-img-url');
        const date = $(el).find('.td-post-date').find('time').attr('datetime');
        const author = $(el).find('.td-post-author-name').find('a').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.discovery.push({ title, thumbnail, author, date, link, endpoint});
    });

    $(main).find('#tdi_9').find('.td_module_mx6').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const thumbnail = $(el).find('img').attr('data-img-url');
        const date = $(el).find('.td-post-date').find('time').attr('datetime');
        const author = $(el).find('.td-post-author-name').find('a').text();
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.discovery.push({ title, thumbnail, author, date, link, endpoint});
    });

    obj.news = [];
    $(main).find('.td-ss-main-content').find('.td_module_1').each((i, el) => {
        const title = $(el).find('h3.entry-title').text();
        const thumbnail = $(el).find('img').attr('data-img-url');
        const author = $(el).find('.td-post-author-name').find('a').text();
        const date = $(el).find('.td-post-date').find('time').attr('datetime');
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');

        obj.news.push({ title, thumbnail, author, date, link, endpoint });
    });

    obj.pagination = [];
    $(main).find('.page-nav').children().each((i, el) => {
        const label = $(el).attr('aria-label');
        if (el.name === 'span')
            obj.pagination.push({ title: $(el).text(), link: null, endpoint: null });
        else if (el.name === 'a' && label === 'prev-page')
            obj.pagination.push({ title: '<', link: $(el).attr('href'), endpoint: $(el).attr('href').replace(tools.BASE_URL, '') });
        else if (el.name === 'a' && label === 'next-page')
            obj.pagination.push({ title: '>', link: $(el).attr('href'), endpoint: $(el).attr('href').replace(tools.BASE_URL, '') });
        else if (el.name === 'a')
            obj.pagination.push({ title: $(el).text(), link: $(el).attr('href'), endpoint: $(el).attr('href').replace(tools.BASE_URL, '') });
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
