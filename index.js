const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
require('dotenv').config()


app.get("/api/facibilities", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Facility 1"
        },
        {
            id: 2,
            name: "Facility 2"
        }
    ]);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

