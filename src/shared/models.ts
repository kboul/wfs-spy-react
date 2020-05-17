import { FC } from 'react';

interface IProvider {
    providerNames: string[];
    providerValues: string[];
}

interface IOperations {
    [operations: string]: { get: string; post: string };
}

interface IFuncs {
    name?: string;
    returns?: string;
    argsAndTypes?: string[];
}

interface IRoutes {
    path: string;
    name: string;
    component: FC;
}

interface IServiceId {
    [serviceIdTag: string]: string;
}

interface IFeatureTypes {
    names: string[];
    titles: string[];
    abstracts: string[];
    defaultCRS: string[];
    lowerCorner: string[];
    upperCorner: string[];
}

interface IAttrNamesTypes {
    names: { [complexType: string]: string[] | any };
    types: { [complexType: string]: string[] | any };
}

export type {
    IProvider,
    IOperations,
    IFuncs,
    IRoutes,
    IServiceId,
    IFeatureTypes,
    IAttrNamesTypes
};
