import { parseXML, extractFilterCap } from '../wfsMetadata';

const getCompOperList = (getCapResp: string): string[] => {
    const parsedResponse = parseXML(getCapResp);
    const compOperList = extractFilterCap(parsedResponse, 'ComparisonOperator');
    return compOperList;
};

export default getCompOperList;
