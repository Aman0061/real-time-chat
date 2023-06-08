const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "51b074a1-38b3-4795-94df-973e9d2fb4a9" } }
      )
      return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);