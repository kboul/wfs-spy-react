import globalConsts from '../../../constants';

const header = 'Attribute Names & Types';

export default {
    header,
    descr:
        'This section provides metadata information derived from the DescribeFeatureType response. The displayed attribute names & types depend on the selected typename drop-down list from the Description / Filter tab.',
    cardHeader: header,
    cardTitle: `Provides information regarding the attribute names and their types.`,
    attrNames: 'Attribute Names',
    attrTypes: 'Attribute Types',
    noAttributesMsg: `
        ${globalConsts.noOperation} ${header}. 
        Please try making individual DescribeFeatureType requests per typename.
    `
};
