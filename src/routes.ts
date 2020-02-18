import WFSRequests from './WFSRequests';
import AttrNamesTypes from './AttrNamesTypes';
import ServiceIdProvider from './ServiceIdProvider';
import OperationsMetadata from './OperationsMetadata';
import FeatureTypeList from './FeatureTypeList';
import FilterCapabilities from './FilterCapabilities';
import Statistics from './Statistics';

export default [
    {
        path: '/wfs-requests',
        name: 'WFS Requests',
        component: WFSRequests
    },
    {
        path: '/attribute-names-types',
        name: 'Attribute Names & Types',
        component: AttrNamesTypes
    },
    {
        path: '/service-id-provider',
        name: 'Service Id & Provider',
        component: ServiceIdProvider
    },
    {
        path: '/operations-metadata',
        name: 'Operations Metadata',
        component: OperationsMetadata
    },
    {
        path: '/feature-type-list',
        name: 'FeatureTypeList',
        component: FeatureTypeList
    },
    {
        path: '/filter-capabilities',
        name: 'Filter Capabilities',
        component: FilterCapabilities
    },
    { path: '/statistics', name: 'Statistics', component: Statistics }
];
