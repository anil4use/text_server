const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Dummy data
let data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'anil' },
    { id: 3, name: 'karan' },
    { id: 4, name: 'pooja' },
    { id: 5, name: 'ram' },
    { id: 6, name: 'vinod' },
    { id: 7, name: 'panjak' },
    { id: 8, name: 'sheela' },
    { id: 9, name: 'jutu' },
    { id: 10, name: 'sunil' },
    { id: 11, name: 'raja' },
    { id: 12, name: 'rahul' },
]

// GET endpoint to retrieve all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// POST endpoint to add new data
app.post('/api/data', (req, res) => {
    const newData = req.body;
    // Generate a new unique ID for the data
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    newData.id = newId;
    data.push(newData);
    res.json(newData);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
