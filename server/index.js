const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const axios = require('axios');
app.use(express.static('build'));

app.get('/api/events', async (req, res) => {
  const limit = req.query.limit
  const response = await axios.get(`http://open-api.myhelsinki.fi/v1/events/?tags_search=music`)
  res.json(response.data)
});

app.get('/api/events/:id', async (req, res) => {
  const id = req.params.id
  const response = await axios.get(`http://open-api.myhelsinki.fi/v1/event/${id}`)
  res.json(response.data)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});