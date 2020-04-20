import { IProvider } from '../shared/models';

interface IServiceIdProvider {}

interface ITitle {
    title: string | null | undefined;
}

interface IAcceptVersions {
    versions: string[];
}

interface IServiceProvider {
    provider: IProvider;
}

interface IAbstract {
    abstract: string | null | undefined;
}

export type {
    IServiceIdProvider,
    ITitle,
    IAcceptVersions,
    IServiceProvider,
    IAbstract
};
