interface IServiceIdProvider {
    header: string;
    descr: string;
    wfsTitleHeader: string;
    wfsTitleHeaderText: string;
    wfsVersionsHeader: string;
    wfsVersionsText: string;
    wfsAbstractHeader: string;
    wfsAbstractText: string;
    wfsProviderHeader: string;
    wfsProviderText: string;
}

interface IAcceptedVersions {
    versions: string[];
}

interface IServiceProvider {
    provider: {
        providerNames: string[];
        providerValues: string[];
    };
}

export type { IServiceIdProvider, IAcceptedVersions, IServiceProvider };
