require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to the News REST API'
    });
});

app.get('*', (req, res) => {
    res.json({
        success: false,
        message: 'Invalid endpoint'
    });
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));