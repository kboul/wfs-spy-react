import { getCapRoutes, descrFeatTypeRoutes } from '../routes';
import { DropdownRoutes } from './models';

const appTitle: string = ' WFS Spy';

const dropdownRoutes: DropdownRoutes[] = [
    { name: 'GetCapabilites', routes: getCapRoutes },
    { name: 'DescribeFeatureType', routes: descrFeatTypeRoutes }
];

const resetStyle = { cursor: 'pointer' };

export { appTitle, dropdownRoutes, resetStyle };
