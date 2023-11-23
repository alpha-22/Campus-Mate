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

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening for requests on ${PORT}`);
    })
});