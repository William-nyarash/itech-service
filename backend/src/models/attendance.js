const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
     userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["present", "absent"],
      default: "absent",
    },
    remarks: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

AttendanceSchema.set('toJSON', {
  transform:(document, returnedObject) =>{
    returnedObject.id= returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})
const Attendance= mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;