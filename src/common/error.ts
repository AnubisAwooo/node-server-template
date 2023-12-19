import { RequestHandler, Request, Response, NextFunction } from 'express';
import log from './logger';
import { failed } from '../types/common';
import { FAILED_CODE_SYSTEM_ERROR } from './failed';

export const handle_error =
    (call: RequestHandler): RequestHandler =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            return call(req, res, next);
        } catch (e: any) {
            log.error(`handle error`, e);
            return res.json(failed(FAILED_CODE_SYSTEM_ERROR, `System error: ${e.message}`));
        }
    };
