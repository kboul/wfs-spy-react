import parseXML from './parseXML';
import globalConsts from '../config';

export default function extractFiltAttrValues(xmlString: string): string {
    const getPropValFiltResp = parseXML(xmlString);
    return getPropValFiltResp
        .querySelectorAll(globalConsts.tags.member)
        .length.toString();
}
