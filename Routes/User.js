const Vegitables = require('../Models/Vegitables');

const router = require('express').Router();

router.get('/vegitables', async (req, res) => {
    try {
        const products = await Vegitables.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error });
    }

})

module.exports = router;