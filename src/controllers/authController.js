const router = require('express').Router();

const authService = require('../services/authService');
const { AUTH_COOKIE_NAME } = require('../constants');



router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let token = await authService.login({ username, password })

        //set token in cookie
        res.cookie(AUTH_COOKIE_NAME, token)

        res.redirect('/')
    }
    catch (error) {
        //TODO: RETURN PROPER NOTIFICATION
        res.end('')

    }
})

router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', async (req, res) => {
    const { name, username, password, rePassword } = req.body;

    if (password !== rePassword) {
        res.locals.error = 'Password mismatch'
        return res.render('auth/register')
    }

    authService.register({ name, username, password, rePassword })

    try {
        await authService.register({
            name,
            username,
            password,
            rePassword
        })
        res.redirect('/')
    } catch (err) {
        //TODO return error response
    }



})

module.exports = router;