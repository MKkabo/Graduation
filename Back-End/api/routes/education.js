const express = require('express');
const router = express.Router();

const db = require('../db');


router.get('/:id', (req,res,next) => {
    let id = req.params.id;
    let query = `
    SELECT * FROM education WHERE user_id = ${id}`;
    db.query(query, (err, result) => {
        if(err) throw err;

        if(result && result.length) {
            return res.json({
                success: true,
                educations: result 
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

    let education = {
        user_id: req.body.user_id || '',
        school_name: req.body.school_name || '',
        degree: req.body.degree || '',
        startDate: req.body.startDate || '',
        endDate: req.body.endDate || '',
    }

    let sql = `INSERT INTO education SET ?`;
    db.query(sql, education, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Education Added Successfully!'
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
    let education = {
        school_name: req.body.school_name || '',
        degree: req.body.degree || '',
        startDate: req.body.startDate || '',
        endDate: req.body.endDate || '',
    }

    let sql = `UPDATE education SET ? WHERE id=${id}`;

    db.query(sql, education, (err, result) => {
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

    let sql = `DELETE FROM education WHERE id=${id}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'education Deleted Successfully!'
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