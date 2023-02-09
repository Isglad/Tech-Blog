const router = require('express').Router();
const { Blog, Comment, User } = require('../models');

// GET all blog for homepage
router.get('/', async  (req, res) => {
    try {
        const dbBlogData = await Blog.findAll({
            include:[
                { model: User },
                { model: Comment, include: [{ model: User }]},
            ]
        });

        const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
            blogs,
            // loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one blog
router.get('/blog/:id', async (req, res) => {
    try {
      const dbBlogData = await Blog.findByPk(req.params.id, {
        include:[
            { model: User },
            { model: Comment, include: [{ model: User }]},
        ]
      });
  
      const gallery = dbGalleryData.get({ plain: true });
      res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

