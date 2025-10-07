const express = require('express');
const router = express.Router();

router.get('/api/btc', (req, res) => {
    // Logic để lấy thông tin Bitcoin
    res.json({ message: 'Thông tin Bitcoin' });
});

module.exports = router;