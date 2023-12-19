import { Request, Response } from 'express';
import { FAILED_CODE_WRONG_PARAMS } from '../common/failed';
import { failed, success } from '../types/common';

interface HelloResponse {
    hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = (name: string) => ({ hello: name });

export const helloHandler = (req: Request, res: Response) => {
    const { name } = req.params;
    if (!name) return res.json(failed(FAILED_CODE_WRONG_PARAMS, 'name is missing'));

    const response = helloBuilder(name);
    return res.json(success(response));
};
