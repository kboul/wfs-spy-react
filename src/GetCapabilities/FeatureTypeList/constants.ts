const featureTypeList = 'FeatureTypeList';

export default {
    header: featureTypeList,
    descr: `	
        Lists the feature types published by a WFS server. 
        Feature types are listed in the form namespace:featuretype. 
        The default projection of the feature type is also listed, along 
        with the bounding box for the data in the stated projection.
    `,
    featTypeListHeader: featureTypeList,
    featTypeListText: `
        Provides a list with the available FeatureTypes in the form "namespace:featuretype". 
        Also the default projection of the FeatureType is listed here along with their Abstract and the resultant 
        bounding box for the data in that projection.
    `
};
