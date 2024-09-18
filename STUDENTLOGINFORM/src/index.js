const express = require('express');
const path = require('path');
const StudentModel = require('./app');
const app = new express();

app.set('view engine','hbs');

app.get('/Students',(req,res) => {
    res.render('index');
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/Students',async(req ,res) => {
    const UserName = req.body.username;
    const Password = req.body.password;
    console.log(UserName, Password)
    const UserRecard = new StudentModel({
        UserName,
        Password
    });

    await UserRecard.save().
       then( () => console.log("Data Saved!!!!")).
          catch( (error) => console.log(error));
          res.render('login');
});


app.listen(1010, () => console.log("Server Created!!!"));

