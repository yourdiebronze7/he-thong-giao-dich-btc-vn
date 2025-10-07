const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Middleware for URL-encoded data

// Add additional routers and middleware here

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});