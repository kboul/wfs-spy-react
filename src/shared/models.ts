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

export type { IProvider, IOperations, IFuncs };
