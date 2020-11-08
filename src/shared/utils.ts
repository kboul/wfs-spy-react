import { extractFilterCap, parseXML } from './wfsMetadata';

const splitStrOnUpperCase = (strOnUpperCase: string): string =>
    strOnUpperCase.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

const getFullTypename = (typename: string): string => {
    return typename ? `${typename.split(':')[1]}Type` : '';
};

const getCompOperList = (getCapResp: string): string[] => {
    const parsedResponse = parseXML(getCapResp);
    const compOperList = extractFilterCap(parsedResponse, 'ComparisonOperator');
    return compOperList;
};

export { splitStrOnUpperCase, getFullTypename, getCompOperList };
