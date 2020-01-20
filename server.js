const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API Running');
});

app.listen(5000, () => {
    console.log(`Server started on port ${PORT}`)
});