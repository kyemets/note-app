const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  const count = parseInt(req.query.count) || 0;
  if (count <= 1 || count > 500) {
    res.status(400).json({ error: 'Invalid count parameter' });
    return;
  }

  const vehicles = [];

  for (let i = 0; i < count; i++) {

    // generation date
    const date = new Date(Date.now() + i * 1000 * 60 * 60 * 24);

    const todo = {
      id: i + 1,
      date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      title: `${i + 1}-todo`,
      description: `Description ${i + 1}`,
     
    };
    vehicles.push(todo);
  }

  res.json(vehicles);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});