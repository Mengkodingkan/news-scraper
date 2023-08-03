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
    obj.publish_date = $(main).find('.td-post-header').find('.td-post-date').find('.entry-date').text();
    obj.description = $(main).find('.wp-caption-text').text();
    obj.post_content = $(main).find('.td-post-content').find('p').html();
    obj.thumbnail = $(main).find('.entry-thumb').attr('data-src');
    obj.prev_content = $(main).find('.td-post-next-prev-content').find('a').attr('href');
    obj.next_content = $(main).find('.td-post-next-prev-content').find('a').attr('href');

    return res.json({
        success: true,
        data: obj
    });
};

module.exports = { news };
