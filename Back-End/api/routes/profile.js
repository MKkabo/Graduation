const express = require('express');
const router = express.Router();

const upload = require('../controllers/upload');
const db = require('../db');


router.post('/complete', upload.single('image'), (req, res, next) => {

    let profile = {
        user_id: req.body.user_id,
        first_name: req.body.first_name || '',
        last_name: req.body.last_name || '',
        phone: req.body.phone || '',
        address: req.body.address || '',
        birthdate: req.body.birthdate || '',
        featured_skills: req.body.featured_skills || '',
        interests: req.body.interests || '',
        image: req.file.path || ''
    }

    console.log(profile);
    let sql = `INSERT INTO profile SET ?`;
    db.query(sql, profile, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Profile Completed Successfully!'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'something went wrong!'
            });
        }
    })
});



router.post('/updateProfile', (req, res, next) => {

    let id = req.body.user_id;

    let profile = {
        first_name: req.body.first_name || '',
        last_name: req.body.last_name || '',
        phone: req.body.phone || '',
        address: req.body.address || '',
        birthdate: req.body.birthdate || '',
        featured_skills: req.body.featured_skills || '',
        interests: req.body.interests || '',
    }

    console.log(profile);
    let sql = `UPDATE profile SET ? WHERE user_id=${id}`;
    db.query(sql, profile, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Profile Updated Successfully!'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'something went wrong!'
            });
        }
    })
});


router.get('/:id', (req,res,next) => {
    let id = req.params.id;
    let query = `
    SELECT
	    users.name as name, users.email as email, profile.*
    FROM profile 
    INNER JOIN users 
        ON profile.user_id = users.id
    WHERE user_id = ${id}`;
    db.query(query, (err, result) => {
        if(err) throw err;

        if(result && result.length) {
            let profile = result[0];
            return res.json({
                success: true,
                profile 
            })
        } else {
            return res.json({
                success: false,
                message: 'Something went wrong!'
            })
        }
    });
})






module.exports = router;