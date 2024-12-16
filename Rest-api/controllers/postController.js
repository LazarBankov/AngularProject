const { userModel, postModel } = require('../models');

async function newPost(userId, photo, address, latitude, longitude, creator, size, people, tools) {
    const post = await postModel.create({ userId, photo, address, latitude, longitude, creator, size, people, tools });
     await userModel.updateOne({ _id: userId }, { $push: { posts: post._id } })
     return post;
}

function getLatestsPosts(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    postModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('userId')
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(next);
}

function getSinglePost(req, res, next) {
    const { postId } = req.params;

    postModel.findById(postId)
        .populate('userId')
        .then(post => {
            if (post) {
                res.status(200).json(post);
            } else {
                console.log('Post not found!');
                res.status(404).json({ message: 'Post not found!' }); 
            }
        })
        .catch(next);
}


function createPost(req, res, next) {
    
    const { photo, address, latitude, longitude, creator, size, people, tools } = req.body;
    const userId = req.user._id;

    newPost(userId, photo, address, latitude, longitude, creator, size, people, tools)
        .then(post => res.status(201).json(post))
        .catch(next);
}

function editPost(req, res, next) {
    const { postId } = req.params;
    
    const { photo, address, latitude, longitude, creator, size, people, tools } = req.body;
    const { _id: userId } = req.user;

    
    // if the userId is not the same as this one of the post, the post will not be updated
    postModel.findOneAndUpdate({ _id: postId, userId }, { photo: photo, address: address, latitude: latitude, longitude: longitude, creator: creator, size: size, people: people, tools: tools }, { new: true })
        .then(updatedPost => {
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deletePost(req, res, next) {
    const { postId } = req.params;
    const { _id: userId } = req.user;
    
    Promise.all([
        postModel.findOneAndDelete({ _id: postId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function like(req, res, next) {
    const { postId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    postModel.updateOne({ _id: postId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

module.exports = {
    getLatestsPosts,
    getSinglePost,
    newPost,
    createPost,
    editPost,
    deletePost,
    like,
}
