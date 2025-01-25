const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 3000;
const database = new sqlite3.Database('./database.sqlite');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/projects', (req, res) => {
    var name = req.body.name;
    var descrption = req.body.description;
    //var created = current timestamp?
    var author = req.body.author;
    createProject(name, descrption, author);
});

function createProject(name, description, author){
    database.run('INSERT INTO projects (name, description, author) VALUES (?, ?, ?)', [name, description, author], function(err){
        if(err){
            console.log(err);
        } else {
            console.log(name, ' created');
        }
    });
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});