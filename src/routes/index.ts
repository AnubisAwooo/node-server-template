import { Express, Request, Response, RequestHandler } from 'express';
import { rootHandler } from '../handlers/root';
import helloRouter from './hello';
import { failed } from '../types/common';
import { FAILED_CODE_NOT_FOUND } from '../common/failed';

interface RouterConfig {
    path: string;
    handler: RequestHandler;
    meta?: unknown;
}

const routers: Array<RouterConfig> = [
    {
        path: '/',
        handler: rootHandler,
    },
];

function routes(app: Express) {
    app.use('/hello', helloRouter);

    routers.forEach((route) => app.use(route.path, route.handler));

    app.get('/**', (req, res) => res.json(failed(FAILED_CODE_NOT_FOUND, 'Not Found.')));
}

export default routes;
