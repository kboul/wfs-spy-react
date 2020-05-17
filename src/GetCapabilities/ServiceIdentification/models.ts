import { IServiceId } from '../../shared/models';

interface IServiceIdentification {}

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

export type {
    IServiceIdentification,
    ITitle,
    IAbstract,
    IKeywords,
    IServiceIdDetails
};
