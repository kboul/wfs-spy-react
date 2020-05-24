import { IServiceId } from '../../shared/models';

interface ITitle {
    title: string | undefined;
}

interface IAbstract {
    abstract: string | undefined;
}

interface IKeywords {
    keywords: string[];
}

interface IServiceIdDetails {
    serviceId: IServiceId;
}

export type { ITitle, IAbstract, IKeywords, IServiceIdDetails };
