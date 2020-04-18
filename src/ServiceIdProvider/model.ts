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
    acceptedVersions: any;
}

export type { IServiceIdProvider, IAcceptedVersions };
