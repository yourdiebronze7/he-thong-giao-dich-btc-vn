const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Added middleware for URL-encoded data

// Thêm router khác và middleware tại đây

app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy trên cổng ${PORT}`);
});