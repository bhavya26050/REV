const db = require("../config/db");

exports.fetchItems = async (category, sort) => {
  let query = "SELECT * FROM items";
  const params = [];

  if (category) {
    query += " WHERE category = ?";
    params.push(category);
  }
  if (sort === "new") {
    query += " ORDER BY created_at DESC";
  } else {
    query += " ORDER BY popularity DESC";
  }

  const [results] = await db.execute(query, params);
  return results;
};
