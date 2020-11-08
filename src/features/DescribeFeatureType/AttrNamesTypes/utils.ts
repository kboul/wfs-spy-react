import { AttrNamesTypes } from '../../../shared/models';
import { getFullTypename } from '../../../shared/utils';
import { State } from '../../../context/models';
import AttrNameTypeProps from './models';

const attrNameType = (attrNamesTypes: AttrNamesTypes, state: State) => {
    const { typename } = state;
    const slctTypenameAttrNames: string[] =
        attrNamesTypes.names[getFullTypename(typename)];

    const slctTypenameAttrTypes: string[] =
        attrNamesTypes.types[getFullTypename(typename)];

    const selectedWfsAttributes: AttrNameTypeProps[] = [];

    slctTypenameAttrNames?.forEach((name, index) => {
        selectedWfsAttributes.push({
            name,
            type: slctTypenameAttrTypes[index]
        });
    });

    return selectedWfsAttributes;
};

export default attrNameType;
