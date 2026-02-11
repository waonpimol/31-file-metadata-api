const express = require('express');
const app = express();
app.use(express.json());

app.post('/file/upload', (req, res) => {
    res.json({ size: 1024, mime: 'text/plain' });
});

app.post('/file/extension', (req, res) => {
    res.json({ ext: '.txt' });
});

app.get('/file/generate-name', (req, res) => {
    res.json({ name: `${Date.now()}.txt` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
