import { IRoutes } from '../shared/models';

interface IDropdownRoutes {
    name: string;
    routes: IRoutes[];
}

interface IDropDownItem {
    routes: IRoutes[];
}

export type { IDropdownRoutes, IDropDownItem };
