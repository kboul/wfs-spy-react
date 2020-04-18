const versions: string[] = ['2.0.0', '2.0.2'];

const requests: string[] = [
    'GetCapabilities',
    'DescribeFeatureType',
    'GetPropertyValue'
];

const allProviderNames: string[] = [
    'ProviderName',
    'IndividualName',
    'PositionName',
    'Voice',
    'DeliveryPoint',
    'Facsimile',
    'City',
    'AdministrativeArea',
    'PostalCode',
    'Country',
    'ElectronicMailAddress',
    'HoursOfService'
];

const allProviderNamesW3: string[] = ['ProviderSite', 'OnlineResource'];

export { versions, requests, allProviderNames, allProviderNamesW3 };
