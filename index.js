const express = require('express');
const app = express();
const cors = require('cors');
const Facibility = require('./models/Facibility');
const { connectDB } = require('./config/db');

app.use(cors());
app.use(express.json());
require('dotenv').config()

 connectDB();

const PORT = process.env.PORT || 5001;



app.get("/api/facibilities", async (req, res) => {
    var data = await Facibility.find();
    res.json(data);
});


app.post("/api/facibilities", async (req, res) => {
    console.log(req.body);
    var data = req.body;
    var facibility = new Facibility(data);
    await facibility.save();
    res.json({ id: facibility._id });
}
);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

