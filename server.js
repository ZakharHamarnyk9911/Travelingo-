const express = require('express')
const app = express()

 
 
const admin  = require("firebase-admin");
const credentials = require("./travelingo-7b048-firebase-adminsdk-j3lw6-f00296c3b6.json")

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.post('/signup', async (req, res) => {
  try {
    const user = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.fname, 
      lastName: req.body.lname 
    };
    const userResponse = await admin.auth().createUser({
      email: user.email,
      password: user.password,
      emailVerified: false,
      disabled: false
    });
   
    res.redirect('/signin'); 
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

app.set('view engine', 'ejs')

app.use(express.static('public/stylesheets'))
app.use(express.static('public/images'))

const indexRouter = require('./routes/index')
app.use('/', indexRouter)
 

app.listen(3000)
console.log('Server running at http://localhost:3000/')