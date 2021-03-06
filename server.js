const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const port = 5000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build/static')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(process.env.PORT || port, () => {
    console.log('Server is running on port' + port);
});

app.get('/ok', (req, res) => {
    res.send('All is god man!')
});

app.use('/api/name', (req, res, next) => {
    const payload = {
        name: 'Tobbe Thun'
    }
    res.status(200)
    res.send(payload);
});