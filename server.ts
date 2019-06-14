import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';
import * as fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log('this', this);
    console.log('url', req.url);
    next();
});

let quizz;

app.post('/ws/quizz', (req, res, next) => {
    console.log('sync the quizz list', req.body);
    quizz = req.body;
    fs.writeFileSync('./quizz.json', JSON.stringify(quizz));
    res.json({
        message: 'sync ok'
    });
});


app.get('/ws/quizz', (req, res, next) => {
    console.log('get the quizz list');
    quizz = JSON.parse(fs.readFileSync('./quizz.json', 'utf8'));
    res.json(quizz);
});


const dir: string = '.';
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});



