import { getCapRoutes, descrFeatTypeRoutes } from '../routes';
import { IDropdownRoutes } from './models';

const appTitle: string = ' WFS Spy';

const dropdownRoutes: IDropdownRoutes[] = [
    { name: 'GetCapabilites', routes: getCapRoutes },
    { name: 'DescribeFeatureType', routes: descrFeatTypeRoutes }
];

export { appTitle, dropdownRoutes };
