const express = require('express');
const router = express.Router();

// Route prefix : /
router.get("/", (req, res) => {
    res.json({
        message: "API Alive"
    });
});

module.exports = router;
