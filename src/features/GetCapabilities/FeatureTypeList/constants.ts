import globalConsts from '../../../constants';
import { splitStrOnUpperCase } from '../../../utils';

const { noOperation, tags } = globalConsts;

const header = 'FeatureTypeList';

export default {
    header,
    descr:
        'Lists the feature types published by a WFS server. Feature types are listed in the form namespace:featuretype. The default projection of the feature type is also listed, along with the bounding box for the data in the stated projection.',
    cardHeader: header,
    cardTitle:
        'Provides a list with the available FeatureTypes in the form "namespace:featuretype". Also the default projection of the FeatureType is listed here along with their Abstract and the resultant bounding box for the data in that projection.',
    noFeaturesMsg: `${noOperation} ${header} information.`,
    tableHeaders: [
        { id: 1, key: 'title', value: tags.title },
        { id: 2, key: 'name', value: tags.featureTypeName },
        { id: 3, key: 'abstract', value: tags.abstract },
        {
            id: 4,
            key: 'defaultCRS',
            value: splitStrOnUpperCase(tags.defaultCRS)
        },
        {
            id: 5,
            key: 'lowerCorner',
            value: splitStrOnUpperCase(tags.lowerCorner)
        },
        {
            id: 6,
            key: 'upperCorner',
            value: splitStrOnUpperCase(tags.upperCorner)
        }
    ]
};
