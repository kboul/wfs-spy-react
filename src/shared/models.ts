interface IProvider {
    providerNames: string[];
    providerValues: string[];
}

interface IOperations {
    [operations: string]: { get: string; post: string };
}

interface ITotalItems {
    numberOfItems: number;
}

export type { IProvider, IOperations, ITotalItems };
