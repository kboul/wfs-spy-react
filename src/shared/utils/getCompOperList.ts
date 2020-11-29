import { parseXML, extractFilterCap } from '../wfsMetadata';

export default function getCompOperList(getCapResp: string): string[] {
    const parsedResponse = parseXML(getCapResp);
    return extractFilterCap(parsedResponse, 'ComparisonOperator');
}
