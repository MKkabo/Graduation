const express = require('express');
const router = express.Router();

const upload = require('../controllers/upload');
const db = require('../db');


router.post('/add', upload.single('image'), (req, res, next) => {


    let profile = {
        user_id: req.body.user_id,
        follower_id: req.body.follower_id,
    }

    let sql = `INSERT INTO followers SET ?`

    db.query(sql, profile, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Follower Added Successfully!'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'something went wrong!'
            });
        }
    })
});


router.delete('/:id/:follower', (req, res, next) => {

    let { id, follower } = req.params;

    let sql = `DELETE FROM followers WHERE user_id = ${id} AND follower_id = ${follower}`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        if (result['affectedRows'] === 1) {
            res.status(200).json({
                success: true,
                message: 'Follower deleted Successfully!'
            });
        } else {
            res.status(500).json({
                success: false,
                message: 'something went wrong!'
            });
        }
    })
});



router.get('/:id/getNFollowers', (req,res,next) => {
    let id = req.params.id;
    let query = `SELECT COUNT(*) As nFollowers FROM followers WHERE user_id = ${id}`;
    db.query(query, (err, result) => {
        if(err) throw err;

        if(result && result.length) {
            console.log(result);
            return res.json({
                success: true,
                result 
            })
        } else {
            return res.json({
                success: false,
                message: 'Something went wrong!'
            })
        }
    });
})

router.get('/:id/getNFollowing', (req,res,next) => {
    let id = req.params.id;
    let query = `SELECT COUNT(*) As nFollowing FROM followers WHERE follower_id = ${id}`;
    db.query(query, (err, result) => {
        if(err) throw err;

        if(result && result.length) {
            console.log(result);
            return res.json({
                success: true,
                result 
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