interface Provider {
    providerNames: string[];
    providerValues: string[];
}

interface Operations {
    [operations: string]: { get: string; post: string };
}

interface Funcs {
    name?: string;
    returns?: string;
    argsAndTypes?: string[];
}

interface ServiceId {
    [serviceIdTag: string]: string;
}

interface FeatureTypes {
    name?: string;
    title?: string;
    abstract?: string;
    defaultCRS?: string;
    lowerCorner?: string;
    upperCorner?: string;
}

interface AttrNamesTypes {
    names: { [complexType: string]: string[] | any };
    types: { [complexType: string]: string[] | any };
}

export type {
    Provider,
    Operations,
    Funcs,
    ServiceId,
    FeatureTypes,
    AttrNamesTypes
};
