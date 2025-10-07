const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để phân tích body thông tin
app.use(express.json());

// API Endpoint mẫu
app.get('/', (req, res) => {
    res.send('Chào mừng đến với Hệ Thống Giao Dịch Bitcoin Việt Nam!');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});