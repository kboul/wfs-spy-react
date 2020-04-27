interface IProvider {
    providerNames: string[];
    providerValues: string[];
}

interface IOperations {
    [operations: string]: { get: string; post: string };
}

interface IFuncs {
    names: string[];
    returns: string[];
    args: string[];
    types: string[];
}

export type { IProvider, IOperations, IFuncs };
