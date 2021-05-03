import globalConsts from '../../../constants';

const { noOperation } = globalConsts;

const acceptVersionsCardHeader = 'Accept Versions';
const header = 'Operations Metadata';

export default {
    header,
    descr:
        'Indicates which version(s) of WFS are supported. Describes also the operations that the WFS server supports and the parameters for each operation. A WFS server may be configured not to respond to the operations listed above.',
    acceptVersionsCardHeader,
    acceptVersionsCardTitle:
        'Provides information for the WFS accepted versions',
    supportsMsg: 'The selected WFS service supports versions ',
    operMetaCardHeader: header,
    operMetaCardTitle: 'Informs which HTTP request methods are supported',
    noAcceptVersionsMsg: `${noOperation} ${acceptVersionsCardHeader}.`,
    noOperMetaMsg: `${noOperation} ${header}.`
};
