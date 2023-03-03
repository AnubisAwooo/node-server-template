import express from 'express';

import { rootHandler } from './handlers/root';
import { helloHandler } from './handlers/hello';

const app = express();
const port = process.env.PORT || '8080';

app.get('/', rootHandler);

app.get('/hello', helloHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
