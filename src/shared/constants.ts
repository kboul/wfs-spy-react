const versions: string[] = ['2.0.0', '2.0.2'];

const requests: string[] = [
    'GetCapabilities',
    'DescribeFeatureType',
    'GetPropertyValue'
];

const noOperation: string = 'This WFS service does not provide ';

const tags = {
    featureTypeName: 'Name',
    title: 'Title',
    abstract: 'Abstract',
    defaultCRS: 'DefaultCRS',
    lowerCorner: 'LowerCorner',
    upperCorner: 'UpperCorner',
    serviceType: 'ServiceType',
    serviceTypeVersion: 'ServiceTypeVersion',
    fees: 'Fees',
    accessConstraints: 'AccessConstraints',
    keywords: 'Keywords',
    acceptVersions: '[name="AcceptVersions"]',
    providerName: 'ProviderName',
    serviceContact: 'ServiceContact',
    serviceProvider: 'ServiceProvider',
    operation: 'Operation',
    operationMethod: 'name',
    featureType: 'FeatureType',
    function: 'Function',
    complexType: 'complexType',
    sequence: 'sequence',
    xLinkHRef: 'xlink:href',
    name: 'name',
    type: 'type',
    member: 'member'
};

const noOption: string = '---';

const propIsBetween: string = 'PropertyIsBetween';

export { versions, requests, noOperation, tags, noOption, propIsBetween };
