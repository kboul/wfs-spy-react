import { FC } from 'react';

import WFSRequests from '../features/WFSRequests';
import {
    FilterCapabilities,
    FeatureTypeList,
    OperationsMetadata,
    ServiceIdentification,
    ServiceProvider
} from '../features/GetCapabilities';
import AttrNamesTypes from '../features/DescribeFeatureType/AttrNamesTypes';
import Statistics from '../features/Statistics';

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
