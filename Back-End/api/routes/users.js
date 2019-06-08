const express = require('express');
const router = express.Router();

const bcryptjs = require('bcryptjs');
const db = require('../db');


router.post('/signup', (req, res, next) => {

    let user = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }

    let sql = `
        INSERT INTO users SET ?
    `;

    bcryptjs.hash(user.password, 10)
        .then(hashedPassword => {
            user.password = hashedPassword;
            db.query(sql, user, (err, result) => {
                if (err) throw err;
                if (result['affectedRows'] === 1) {
                    res.status(200).json({
                        success: true,
                        user_id: result.insertId,
                        message: 'User Created Successfully!'
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: 'Something Went Wrong!'
                    });
                }

            })

        })
        .catch(err => console.log(err));
})



router.post('/login', (req, res, next) => {
    let email = req.body.email;
    let phone = req.body.phone;
    let plainPassword = req.body.password;
    let selector = null;
    let sql = ``;
    if(phone) {
        selector = phone;
        sql = `SELECT * FROM users WHERE phone = ? LIMIT 1`;
    } else {        
        selector = email;
        sql = `SELECT * FROM users WHERE email = ? LIMIT 1`;
    }

    db.query(sql, selector, (err, result) => {
        if (err) throw err;
        if(result.length >= 1) {
            let user = result[0];
            bcryptjs.compare(plainPassword, user.password)
                .then(response => {
                    if (response === true) {
                        res.json({
                            success: true,
                            user,
                            message: `you're logged in successfully!`
                        })
                    } else {
                        res.json({
                            success: false,
                            message: `somthing went wrong! try again`
                        })
                    }
                })
                .catch(err => console.log(err))
        } else {
            res.json({
                success: false,
                message: `somthing went wrong! try again`
            })
        }
    })
})






module.exports = router;