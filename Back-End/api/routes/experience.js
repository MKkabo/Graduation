const express = require('express');
const router = express.Router();

const db = require('../db');



router.get('/:id', (req,res,next) => {
    let id = req.params.id;
    let query = `
    SELECT * FROM experience WHERE user_id = ${id}`;
    db.query(query, (err, result) => {
        if(err) throw err;

        if(result && result.length) {
            return res.json({
                success: true,
                experiences: result 
            })
        } else {
            return res.json({
                success: false,
                message: 'Something went wrong!'
            })
        }
    });
})


router.post('/add', (req, res, next) => {

    let experience = {
        user_id: req.body.user_id || '',
        job_title: req.body.job_title || '',
        company_name: req.body.company_name || '',
        description: req.body.description || '',
        startDate: req.body.startDate || '',
        endDate: req.body.endDate || '',
    }

    let sql = `INSERT INTO experience SET ?`;
    db.query(sql, experience, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Experience Added Successfully!'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'something went wrong!'
            });
        }
    })
});


router.post('/edit/:id', (req, res, next) => {

    let id = req.params.id;
    let experience = {
        job_title: req.body.job_title || '',
        company_name: req.body.company_name || '',
        description: req.body.description || '',
        startDate: req.body.startDate || '',
        endDate: req.body.endDate || '',
    }

    let sql = `UPDATE experience SET ? WHERE id=${id}`;

    db.query(sql, experience, (err, result) => {
        if (err) throw err;
        if (result && result.length) {
            return res.json({
                success: true,
                courses: result
            })
        } else {
            return res.json({
                success: false,
                message: 'Something went wrong!'
            })
        }
    });
})


router.delete('/remove/:id', (req, res, next) => {

    let id = req.params.id;

    let sql = `DELETE FROM experience WHERE id=${id}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Experience Deleted Successfully!'
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