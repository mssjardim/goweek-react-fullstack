const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/Tweet.controller');
const LikeController = require('./controllers/Like.controller');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store);

routes.get('/', (req, res) => {
  return res.send({
    description: 'Go week Backend',
    statusCode: 200
  });
});

module.exports = routes;
