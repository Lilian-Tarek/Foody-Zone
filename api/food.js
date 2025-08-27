import data from "./src/server/db.json";

export default function handler(req, res) {
  res.status(200).json(data.food); 
}
