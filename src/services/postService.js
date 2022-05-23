const axios = require('axios');

const baseUrlPostApi = "https://jsonplaceholder.typicode.com/posts";

const list = async() => {
    const response = await axios.get(baseUrlPostApi);
    const posts = response.data;
    return posts;
};
const getById = (id) => {};
const create = (post) => {};
const update = (post) => {};

const postService = {list, getById, create, update};

module.exports = postService;