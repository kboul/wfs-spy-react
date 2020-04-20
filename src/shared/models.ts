interface IProvider {
    providerNames: string[];
    providerValues: string[];
}

interface IOperations {
    [operations: string]: { get: string; post: string };
}

export type { IProvider, IOperations };
