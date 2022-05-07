const mongoose = require("mongoose");

var mongoURL =
    "mongodb+srv://peterdinh:peter123@cluster0.th7po.mongodb.net/ACK_Books";

// connect mongodb
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

// check if it has connected or not
db.on("connected", () => {
    console.log("Database connected successfully");
});
db.on("error", () => {
    console.log("Database fail to connect");
});

module.exports = mongoose;
