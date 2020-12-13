import { FC, lazy } from 'react';

import WFSRequests from '../features/WFSRequests';

const AttrNamesTypes = lazy(
    () => import('../features/DescribeFeatureType/AttrNamesTypes')
);
const FeatureTypeList = lazy(
    () => import('../features/GetCapabilities/FeatureTypeList')
);
const FilterCapabilities = lazy(
    () => import('../features/GetCapabilities/FilterCapabilities')
);
const OperationsMetadata = lazy(
    () => import('../features/GetCapabilities/OperationsMetadata')
);
const ServiceIdentification = lazy(
    () => import('../features/GetCapabilities/ServiceIdentification')
);
const ServiceProvider = lazy(
    () => import('../features/GetCapabilities/ServiceProvider')
);
const Statistics = lazy(() => import('../features/Statistics'));

const getCapRoute = '/get-capabilities';

export interface Routes {
    path: string;
    name: string;
    component: FC;
}

const getCapRoutes: Routes[] = [
    {
        path: `${getCapRoute}/service-identification`,
        name: 'Service Identification',
        component: ServiceIdentification
    },
    {
        path: `${getCapRoute}/service-provider`,
        name: 'Service Provider',
        component: ServiceProvider
    },
    {
        path: `${getCapRoute}/operations-metadata`,
        name: 'Operations Metadata',
        component: OperationsMetadata
    },
    {
        path: `${getCapRoute}/feature-type-list`,
        name: 'FeatureTypeList',
        component: FeatureTypeList
    },
    {
        path: `${getCapRoute}/filter-capabilities`,
        name: 'Filter Capabilities',
        component: FilterCapabilities
    }
];

const descrFeatTypeRoutes: Routes[] = [
    {
        path: '/describe-feature-type/attribute-names-types',
        name: 'Attribute Names & Types',
        component: AttrNamesTypes
    }
];

const mainRoutes: Routes[] = [
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
