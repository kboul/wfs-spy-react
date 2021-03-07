import { AttrNamesTypes } from '../../../../../wfsMetadata/models';
import { getFullTypename } from '../../../../../utils';
import AttrNameTypeProps from '../../models';

export default function getAttrNameTypeList(
    typename: string,
    attrNamesTypes: AttrNamesTypes
) {
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
}
