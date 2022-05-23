const postService = require('./../services/postService');

const list = async(req, res) => {
    const posts = await postService.list();
    res.send(posts);
};
const getById = (req, res) => {};
const create = (req, res) => {};
const update = (req, res) => {};

const postController = {list, getById, create, update};

module.exports = postController;
