const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let comments = [];

app.post('/add-comment', (req, res) => {
    const { username, image, text } = req.body;
    const newComment = { username, image, text };
    comments.push(newComment);
    res.status(200).send('Comentariul a fost adăugat');
});

app.get('/get-comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Serverul rulează pe portul 3000');
});
