const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    console.log("Hello!");
    res.status(200).send('Hello from backend!');
});

app.listen(5001, () => console.log('Server running on port 5000'));

