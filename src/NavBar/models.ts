import { IRoutes } from '../shared/models';

interface INavBar {}

interface IDropdownRoutes {
    name: string;
    routes: IRoutes[];
}

interface IDropDownItem {
    routes: IRoutes[];
}

export type { INavBar, IDropdownRoutes, IDropDownItem };
