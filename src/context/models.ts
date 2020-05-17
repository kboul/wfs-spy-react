import { ReactNode } from 'react';
import { IAttrNamesTypes } from '../shared/models';

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
    valueReference: string;
    valueReferences: IAttrNamesTypes;
    wfsRequest: string;
    wfsResponse: string;
    getCapResp: string;
    descFeatTypeResp: string;
    sortBy: string;
    errors: {
        url?: string;
    };
    getGetCapTime: number;
    getGetCapNumber: number;
    getDescFeatTypeTime: number;
    getDescFeatTypeNumber: number;
}

interface IAction {
    type: string;
    payload: any;
}

export type { IProvider, IState, IAction };
