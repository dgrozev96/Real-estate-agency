const router = require('express').Router();

const authService = require('../services/authService');


router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', (req, res) => {
 console.log(req.body);   
 res.end()
})

module.exports = router;