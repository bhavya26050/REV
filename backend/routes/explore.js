const express = require("express");
const router = express.Router();
const { fetchItems } = require("../controllers/exploreController");

router.get("/explore", async (req, res) => {
  const { category, sort } = req.query;
  try {
    const items = await fetchItems(category, sort);
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

module.exports = router;
