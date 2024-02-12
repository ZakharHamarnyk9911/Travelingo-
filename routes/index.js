var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.render('signin')
})

router.get('/home', (req, res) => {s
    res.render('home')
})

router.get('/signup', (req, res) => {
    res.render('signup')
}
)

/** 
router.post('/signup', (req, res) => {

    res.redirect('/')
});
*/
router.get('/login', (req, res) => {
    res.render('home');
});
module.exports = router