interface iValues {
    url: string;
    version: string;
    request: string;
    service: string;
    typename: string;
    valueRefer: string;
    sortBy: string;
}

interface WfsResponse {
    data: string;
    status: number;
    statusText: string;
    headers: Object;
    config: Object;
    request: Object;
}

interface Errors {
    url?: string;
}

interface IExploreWFS {}

export type { iValues, IExploreWFS, WfsResponse, Errors };
