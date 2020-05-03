interface IFeatureTypeList {}

interface IFeatureDetails {
    features: {
        names: string[];
        titles: string[];
        abstracts: string[];
        defaultCRS: string[];
        lowerCorner: string[];
        upperCorner: string[];
    };
}

export type { IFeatureTypeList, IFeatureDetails };
