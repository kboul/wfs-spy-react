import { State } from '../context/models';
import getFullTypename from './getFullTypename';

export default function getValRefType(state: State): string {
    const { typename, valueReference, valueReferences } = state;

    const attrNames: string[] =
        valueReferences.names[getFullTypename(typename)];

    if (
        !typename ||
        !valueReference ||
        Object.keys(valueReferences.names).length === 0 ||
        !attrNames
    )
        return '';

    const typeIndex = attrNames.findIndex(el => el === valueReference);
    const type = valueReferences.types[getFullTypename(typename)][typeIndex];
    return type?.replace('xsd:', '');
}
