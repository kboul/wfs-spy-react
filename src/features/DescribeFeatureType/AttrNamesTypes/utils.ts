import { AttrNamesTypes } from '../../../shared/models';
import { getFullTypename } from '../../../shared/utils';
import AttrNameTypeProps from './models';

const getAttrNameType = (attrNamesTypes: AttrNamesTypes, typename: string) => {
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

export default getAttrNameType;
