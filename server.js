const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require(`./index.js`);

dotenv.config({ path: "./config.env" });

const DB = process.env.DB.replace('<password>', process.env.PASSWORD);

mongoose.connect(DB).then(console.log("connected to db"));

const PORT = process.env.PORT || 3000;

//console.log(process.env);
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});