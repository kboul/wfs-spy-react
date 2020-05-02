import WFSRequests from './WFSRequests';
import ServiceIdentification from './GetCapabilities/ServiceIdentification';
import ServiceProvider from './GetCapabilities/ServiceProvider';
import OperationsMetadata from './GetCapabilities/OperationsMetadata';
import FeatureTypeList from './GetCapabilities/FeatureTypeList';
import FilterCapabilities from './GetCapabilities/FilterCapabilities';
import AttrNamesTypes from './DescribeFeatureType/AttrNamesTypes';
import Statistics from './Statistics';
import { IRoutes } from './shared/models';

const getCapRoutes: IRoutes[] = [
    {
        path: '/service-identification',
        name: 'Service Identification',
        component: ServiceIdentification
    },
    {
        path: '/service-provider',
        name: 'Service Provider',
        component: ServiceProvider
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
    }
];

const descrFeatTypeRoutes: IRoutes[] = [
    {
        path: '/attribute-names-types',
        name: 'Attribute Names & Types',
        component: AttrNamesTypes
    }
];

const mainRoutes: IRoutes[] = [
    {
        path: '/wfs-requests',
        name: '',
        component: WFSRequests
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    }
];

export { getCapRoutes, descrFeatTypeRoutes, mainRoutes };
