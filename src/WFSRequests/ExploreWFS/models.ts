interface IWfsResponse {
    data: string;
    status: number;
    statusText: string;
    headers: Object;
    config: Object;
    request: Object;
}

interface IColors {
    white: string;
    lightPurple: string;
}

interface IExploreWFS {}

export type { IExploreWFS, IWfsResponse, IColors };
