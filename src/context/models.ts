import { ReactNode } from 'react';

interface IProvider {
    children: ReactNode;
}

interface IState {
    url: string;
    version: string;
    request: string;
    service: string;
    typename: string;
    typenames: string[];
    wfsRequest: string;
    wfsResponse: string;
    getCapResponse: string;
    sortBy: string;
    errors: {
        url?: string;
    };
}

interface IAction {
    type: string;
    payload: any;
}

export type { IProvider, IState, IAction };
