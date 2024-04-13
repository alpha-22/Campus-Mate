const express = require('express')
const app = express()
const PORT = 5000

const db = require("./models");
app.use(express.json())
const cors=require('cors')
app.use(cors());
// Routers
const postRouter = require("./routes/Studentsub");
app.use("/studentInfo", postRouter);
const Slogin = require("./routes/StudIn");
app.use("/studentlog", Slogin);
const SubReq = require("./routes/GetSubs");
app.use("/getsub", SubReq);
const Faculty = require("./routes/Faculty");
app.use("/faculty", Faculty);
const facultySubjectsRouter = require("./routes/FacultySubjects");
const facultyStudentsRouter = require("./routes/FacultyStudents");
const timetableRouter = require("./routes/Timetable");
app.use("/faculty/subjects", facultySubjectsRouter);
app.use("/faculty/students", facultyStudentsRouter);
app.use("/faculty/timetable", timetableRouter);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening for requests on ${PORT}`);
    })
});