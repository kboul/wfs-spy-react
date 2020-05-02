import { IProvider } from '../../shared/models';

interface IServiceProvider {}

interface IServiceProviderTable {
    provider: IProvider;
}

export type { IServiceProvider, IServiceProviderTable };
