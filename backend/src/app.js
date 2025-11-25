const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const UserRouter = require('./routes/User.routes');
const AttendanceRouter = require('./routes/attendance.routes');
const env = require('./config/env');


const connectDB = require('./config/db');

require('dotenv').config();

connectDB();

const app = express()
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

app.use('/itech-club', UserRouter);
app.use('/itech-attend',AttendanceRouter)

app.listen(env.PORT, ()=>{
    console.log(`serve running on port :${env.PORT}`);
});