 const Attendance  = require('../models/attendance');

 const getAttendance = async (req, res) => {
const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({});
    res.json(attendance);
  } catch (error) {
    console.error("Error fetching attendance:", error.message);
    res.status(500).json({ message: "Server Error: Unable to fetch attendance" });
  }
};
};
 const updateAttendance = async(req, res) => {
    try{
        const {id} = req.params;

        const updateAttendance= await Attendance.findByIdAndUpdate(id,
            req.body,
            {new:true}
        )
        if(!updateAttendance) res.status(404).json("could not find the attendance");

        res.json(updateAttendance);
    }catch(error){
        console.log("error", error.message)
    }
};

const createAttendance = async (req, res) => {
  try {
    const { user, date, status } = req.body;

    const attendanceDate = new Date(date);
    attendanceDate.setHours(0, 0, 0, 0);

    let attendance = await Attendance.findOne({ user, date: attendanceDate });

    if (attendance) {
      attendance.status = status;
      await attendance.save();
      return res.json({
        message: "Attendance updated successfully",
        attendance,
      });
    }
    attendance = new Attendance({ user, date: attendanceDate, status });
    const savedAttendance = await attendance.save();

    res.status(201).json({
      message: "Attendance created successfully",
      attendance: savedAttendance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 const deleteAttendance = (req, res) => {
   try {
     const {id} = req.params;

    const currentAttendance = Attendance.findByIdAndDelete(id);

    if(!currentAttendance) {res.status(404).json({message: "attendance not found"})
    }
    res.json({message: "attendance cleared succesfully"})
    }catch(error){
        res.status(500).json({ message: "Server error" });
    }
};
module.exports = {
    getAttendance,
    updateAttendance,
    createAttendance,
    deleteAttendance
}