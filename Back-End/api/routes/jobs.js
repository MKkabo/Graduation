const express = require('express');
const router = express.Router();

const upload = require('../controllers/upload');
const db = require('../db');


router.post('/insert', upload.single('image'), (req, res, next) => {

    let job = {
        job_title: req.body.job_title || '',
        job_field: req.body.job_field || '',
        company_name: req.body.company_name || '',
        requirements: req.body.requirements || '',
        about: req.body.about || '',
        location: req.body.location || '',
        image: req.file.path || '',
    }

    let sql = `INSERT INTO jobs SET ?`;
    db.query(sql, job, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Job Added Successfully!'
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
    let query = `SELECT * From jobs`;
    db.query(query, (err, result) => {
        if (err) throw err;

        if (result && result.length) {
            return res.json({
                success: true,
                jobs: result
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