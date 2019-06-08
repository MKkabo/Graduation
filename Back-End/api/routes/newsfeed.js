const express = require('express');
const router = express.Router();

const upload = require('../controllers/upload');
const db = require('../db');


router.post('/insert', upload.single('image'), (req, res, next) => {

    let newsfeed = {
        body: req.body.body || '',
        image: req.file.path || ''
    }

    let sql = `INSERT INTO newsfeed SET ?`;
    db.query(sql, newsfeed, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'newsfeed Added Successfully!'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'something went wrong!'
            });
        }
    })
});


router.get('/all', (req, res, next) => {
    let query = `SELECT * From newsfeed`;
    db.query(query, (err, result) => {
        if (err) throw err;

        if (result && result.length) {
            return res.json({
                success: true,
                newsfeeds: result
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