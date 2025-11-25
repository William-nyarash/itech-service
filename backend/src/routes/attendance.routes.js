/* Import the required modules */
const express = require('express');
const AttendanceRouter = express.Router();
const { getAttendance, createAttendance, updateAttendance, deleteAttendance } = require('../controllers/attendance.controllers');

AttendanceRouter.route('/attendance').get(getAttendance)
AttendanceRouter.route('/attendance').post(createAttendance)
AttendanceRouter.route('/attendance/:id')
    .put(updateAttendance)
    .delete(deleteAttendance);

module.exports = AttendanceRouter;