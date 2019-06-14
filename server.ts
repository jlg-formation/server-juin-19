import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.use((req, res, next) => {
    console.log('this', this);
    console.log('url', req.url);
    next();
});

const dir: string = '.';
app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});



