const express = require('express');
const path = require('path');
const ejs = require('ejs');
const {connectDB}= require('./db')
const User = require('./models/users.js');

connectDB();
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas
app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.get('/profile', (req, res)=>{
    res.render('profile',{
        name: 'Daniel',
        age: 17
    });
})

// archivos estaticos

app.use(express.static('public'))

// Encender el servidor
app.listen(process.env.PORT || 3000);
console.log('server on port ',process.env.PORT || 3000);