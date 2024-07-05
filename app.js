const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const apiKey = 'a73a81609emsh6711e075bbb1f55p136ddfjsnd22b410d537a';

const corsOptions = {
  origin: '*', 
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/get-word-details', async (req, res) => {
  try {
    const { inputWord } = req.body;
    const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${inputWord}`;

    const response = await axios.get(apiUrl, {
      headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      }
    });

    const data = response.data; 

    res.send({ data });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
