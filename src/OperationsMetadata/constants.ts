const operationsMetadata = 'Operations Metadata';

export default {
    header: operationsMetadata,
    descr: `
        Describes the operations that the WFS server supports and the 
        parameters for each operation. A WFS server may be configured 
        not to respond to the operations listed above.
    `,
    operMetaHeader: operationsMetadata,
    operMetaText: 'Informs which HTTP request methods are supported',
    noOperation: `This WFS service does not provide ${operationsMetadata}.`
};
