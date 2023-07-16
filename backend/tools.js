const { create, AxiosResponse } = require('axios');
const cheerio = require('cheerio');

class Tools {
    constructor() {
        this.BASE_URL = process.env.BASE_URL;
        this.request = create({
            baseURL: this.BASE_URL,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'

            },
            timeout: 10000
        });
    }

    /**
     * 
     * @param {{url: string, params: object}} RequestObject
     * @returns Promise<AxiosResponse>
     * @memberof Tools
     * @description Make a GET request to the specified URL
     */
    async get({ url, params }) {
        try {
            const response = await this.request.get(url, { params });
            return response;
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }

    async post({ url, params, data }) {
        try {
            const response = await this.request.post(url, data, { params });
            return response;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    loadCheerio({ html }) {
        return cheerio.load(html);
    }
}

module.exports = Tools;