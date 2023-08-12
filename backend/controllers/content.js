const { Request, Response } = require('express');
const Tools = require('../tools');
const tools = new Tools();

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const news = async (req, res) => {
    const { category, option, option2 } = req.params;

    let endpoint = null;
    if (option && option2)
        endpoint = `${category}/${option}/${option2}`;
    else if (option)
        endpoint = `${category}/${option}`;
    else
        return res.json({ success: false, message: 'Invalid endpoint' }, 400);

    const response = await tools.get({ url: endpoint });
    const $ = tools.loadCheerio({ html: response.data });
    const main = $('.post-template-default');

    const obj = {};

    obj.title = $(main).find('.td-post-title').find('.entry-title').text();
    obj.thumbnail = $(main).find('.entry-thumb').attr('data-src');
    obj.publish_date = $(main).find('.td-post-header').find('.td-post-date').find('.entry-date').text();
    obj.description = $(main).find('.wp-caption-text').text();
    obj.post_content = $(main).find('.td-post-content').find('p').html();

    const prev_content = $(main).find('.td-post-next-prev-content');
    obj.prev_content = {
        title: prev_content.find('a').text(),
        link: prev_content.find('a').attr('href'),
        endpoint: prev_content.find('a').attr('href').replace(tools.BASE_URL, '')
    };

    const next_content = $(main).find('.td-post-next-prev-content');
    obj.next_content = {
        title: next_content.find('a').text(),
        link: next_content.find('a').attr('href'),
        endpoint: next_content.find('a').attr('href').replace(tools.BASE_URL, '')
    };

    const author = $(main).find('.td-post-author-name');
    obj.author = {
        name: $(author).find('a').text(),
        avatar: $(author).find('noscript').children('img').attr('src'),
        link: $(author).find('a').attr('href'),
        endpoint: $(author).find('a').attr('href').replace(tools.BASE_URL, ''),
        social: []
    };
    const social = $(main).find('.td-author-social').children();
    $(social).each((i, el) => {
        const title = $(el).find('a').attr('title');
        const link = $(el).find('a').attr('href');
        const endpoint = link.replace(tools.BASE_URL, '');
        obj.author.social.push({ title, link, endpoint });
    });


    return res.json({
        success: true,
        data: obj
    });
};

module.exports = { news };
