const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  const count = parseInt(req.query.count) || 0;
  if (count <= 1 || count > 500) {
    res.status(400).json({ error: 'Invalid count parameter' });
    return;
  }

  const notes = [];

  for (let i = 0; i < count; i++) {

    const date = new Date(Date.now() + i * 1000 * 60 * 60 * 24);

    const note = {
      id: i + 1,
      date: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      title: `${i + 1}-note`,
      description: `Description ${i + 1}`,
     
    };
    notes.push(note);
  }

  res.json(notes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});