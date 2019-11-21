const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        pseudo: "Drakx116"
    })
});

module.exports = router;