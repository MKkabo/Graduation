const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const CONFIG = require('./config');


const app = express();



/**
 * 
 * MiddleWares
 * 
 */
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))


/**
 * 
 * DB CONNECTION
 * 
 */
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected Successfully!');
});


/**
 * 
 * ROUTES
 * 
 */

const usersRoutes = require('./routes/users');
const profileRoutes = require('./routes/profile');
const followerRoutes = require('./routes/follower');
const coursesRoutes = require('./routes/courses');
const jobsRoutes = require('./routes/jobs');
const newsfeedRoutes = require('./routes/newsfeed');
const experienceRoutes = require('./routes/experience');
const educationRoutes = require('./routes/education');
const rateRoutes = require('./routes/rate');

app.use('/api/users', usersRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/followers', followerRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/newsfeed', newsfeedRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/rate', rateRoutes);



/**
 * 
 * App Listen PORT
 */

app.listen(CONFIG.port, () => {
    console.log(`App is Listenning in Port ${CONFIG.port}`);
})
