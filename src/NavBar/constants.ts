import { getCapRoutes, descrFeatTypeRoutes } from '../routes';
import { IDropdownRoutes } from './models';

const dropdownRoutes: IDropdownRoutes[] = [
    { name: 'GetCapabilites', routes: getCapRoutes },
    { name: 'DescribeFeatureType', routes: descrFeatTypeRoutes }
];

export default dropdownRoutes;
