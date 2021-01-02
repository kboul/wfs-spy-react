import { noOperation } from '../../../config/constants';

const acceptVersions = 'Accept Versions';
const operationsMetadata = 'Operations Metadata';

export default {
    header: operationsMetadata,
    descr: `
        Indicates which version(s) of WFS are supported.
        Describes also the operations that the WFS server supports and the 
        parameters for each operation. A WFS server may be configured 
        not to respond to the operations listed above.
    `,
    versionsTitle: 'Provides information for the WFS accepted versions',
    acceptVersionsStr: 'The selected WFS service supports versions ',
    versionsHeader: acceptVersions,
    operMetaHeader: operationsMetadata,
    operMetaText: 'Informs which HTTP request methods are supported',
    noAcceptVersions: `${noOperation} ${acceptVersions}.`,
    noOperation: `This WFS service does not provide ${operationsMetadata}.`
};
