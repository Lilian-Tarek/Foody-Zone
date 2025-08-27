import data from "./db.json" assert { type: "json" };

export default function handler(req, res) {
  try {
    res.status(200).json(data.food);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to load data", details: error.message });
  }
}
