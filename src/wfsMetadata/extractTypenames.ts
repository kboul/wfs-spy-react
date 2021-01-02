import parseXML from './parseXML';
import tags from '../config/tags';
import { noOption } from '../config/constants';

export default function extractTypenames(data: string): string[] {
    if (!data) return [];

    const typenamesTags = parseXML(data).querySelectorAll(tags.featureTypeName);
    const typenames: string[] = [noOption];

    if (typenamesTags) {
        typenamesTags.forEach(tag => {
            if (tag.textContent) typenames.push(tag.textContent);
        });
    }

    return typenames;
}
