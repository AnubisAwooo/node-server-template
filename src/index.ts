import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import log from './common/logger';

var jsonParser = bodyParser.json();

const app = express();
const port = process.env.PORT || '8080';

app.use(jsonParser);

app.listen(port, () => {
    log.info(`Server is listening on ${port}`);
    routes(app);
    return console.log(`\nServer is listening on ${port}\n`);
});
