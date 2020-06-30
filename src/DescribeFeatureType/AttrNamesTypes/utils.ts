import { IAttrNamesTypes } from '../../shared/models';
import { selectedTypename } from '../../shared/utils';
import { IState } from '../../context/models';
import IAttrNameType from './models';

const attrNameType = (attrNamesTypes: IAttrNamesTypes, state: IState) => {
    const { typename } = state;
    const slctTypenameAttrNames: string[] =
        attrNamesTypes.names[selectedTypename(typename)];

    const slctTypenameAttrTypes: string[] =
        attrNamesTypes.types[selectedTypename(typename)];

    const selectedWfsAttributes: IAttrNameType[] = [];

    slctTypenameAttrNames?.forEach((name, index) => {
        selectedWfsAttributes.push({
            name,
            type: slctTypenameAttrTypes[index]
        });
    });

    return selectedWfsAttributes;
};

export default attrNameType;
