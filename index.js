const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request body
app.use(express.json());

// Sample API Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Vietnam Bitcoin Trading System!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});