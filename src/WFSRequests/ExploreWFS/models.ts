interface IValues {
    url: string;
    version: string;
    request: string;
    service: string;
    typename: string;
    valueRefer: string;
    sortBy: string;
}

interface IWfsResponse {
    data: string;
    status: number;
    statusText: string;
    headers: Object;
    config: Object;
    request: Object;
}

interface IErrors {
    url?: string;
}

interface IColors {
    white: string;
    lightPurple: string;
}

interface IExploreWFS {}

export type { IValues, IExploreWFS, IWfsResponse, IErrors, IColors };
