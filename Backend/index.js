const express = require('express');
const axios = require('axios');
const app = express();

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get('http://api.mediastack.com/v1/news?access_key=&categories=sports&limit=10', 
     );
    res.json(response);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));