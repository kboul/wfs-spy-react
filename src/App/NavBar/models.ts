import { Routes } from '../routes';

interface DropDownItemProps {
    routes: Routes[];
}

interface DropdownRoutes {
    name: string;
    routes: Routes[];
}

export type { DropDownItemProps, DropdownRoutes };
