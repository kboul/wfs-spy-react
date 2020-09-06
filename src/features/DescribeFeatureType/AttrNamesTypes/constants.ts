import { noOperation } from '../../../shared/constants';

const attrNamesTypes = 'Attribute Names & Types';

export default {
    header: attrNamesTypes,
    descr: `This section provides metadata information derived from the
        DescribeFeatureType response. The displayed attribute names &
        types depend on the selected typename drop-down list from the
        Description / Filter tab.`,
    panelHeader: attrNamesTypes,
    panelDescr: `Provides information regarding the attribute names and their types.`,
    attrNames: 'Attribute Names',
    attrTypes: 'Attribute Types',
    noAttributes: `${noOperation} ${attrNamesTypes}.`
};
