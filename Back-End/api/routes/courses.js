const express = require('express');
const router = express.Router();

const upload = require('../controllers/upload');
const db = require('../db');


router.post('/insert', upload.single('image'), (req, res, next) => {

    let course = {
        name: req.body.name || '',
        category: req.body.category || '',
        course_level: req.body.course_level || '',
        about: req.body.about || '',
        location: req.body.location || '',
        duration: req.body.duration || '',
        image: req.file.path || ''
    }

    let sql = `INSERT INTO courses SET ?`;
    db.query(sql, course, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Courses Added Successfully!'
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
    let query = `SELECT * From courses`;
    db.query(query, (err, result) => {
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




router.post('/search', (req, res, next) => {
    let { search } = req.body;
    let query = `SELECT * From courses where name Like '%${search}%'`;

    db.query(query, (err, result) => {
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





module.exports = router;