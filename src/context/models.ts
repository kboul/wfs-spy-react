import { ReactNode } from 'react';

interface IProvider {
    children: ReactNode;
}

interface IState {
    url: string;
    version: string;
    request: string;
    wfsRequest: string;
    wfsResponse: string;
    parsedGetCapResp: Object;
}

interface IAction {
    type: string;
    payload: any;
}

export type { IProvider, IState, IAction };
