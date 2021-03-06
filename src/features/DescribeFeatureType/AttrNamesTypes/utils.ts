import { AttrNamesTypes } from '../../../wfsMetadata/models';
import { getFullTypename } from '../../../utils';
import AttrNameTypeProps from './models';

export default function getAttrNameType(
    attrNamesTypes: AttrNamesTypes,
    typename: string
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
