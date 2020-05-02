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

export type { IProvider, IOperations, IFuncs, IRoutes };
