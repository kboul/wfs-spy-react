import { getRootRequest } from '../../../utils';
import { State } from '../../../context/models';
import { XmlNamespaces } from '../../../wfsMetadata/models';
import { requests, noOption } from '../../../config/constants';

const formGetRequest = (state: State): string => {
    const {
        url,
        version,
        request,
        service,
        typename,
        valueReference,
        sortBy
    } = state;

    const rootRequest = getRootRequest(url, version, request, service);

    switch (state.request) {
        case requests[0]:
            return rootRequest;
        case requests[1]:
            if ([noOption, '', null].includes(typename)) {
                // to include also empty first value
                return rootRequest;
            }
            // Request for individual FeatureType ==> should be TypeName
            return `${rootRequest}\n&TypeName=${typename}`;
        case requests[2]:
            return `${rootRequest}&\ntypeNames=${typename}&\nvalueReference=${valueReference}&\nsortBy=${valueReference}+${sortBy}`;
        default:
            return '';
    }
};

const concatPrefixesAndUris = (xmlNamespaces: XmlNamespaces): string[] => {
    // concatenate PREFIX with URI to a unique Array to form XML Namespaces
    const { prefixes, uris } = xmlNamespaces;
    const prefixAndUriArray: string[] = [];
    for (let i = 0; i < prefixes.length; i++) {
        // avoid attributes[0] which is the version so start from 1
        if (prefixes[i] && uris[i])
            prefixAndUriArray[i] = `${prefixes[i]}="${uris[i]}"`;
    }
    return prefixAndUriArray;
};

const formPostRequest = (state: State): string => {
    let prefixesAndUris;
    if ([requests[1], requests[2]].includes(state.request))
        prefixesAndUris = concatPrefixesAndUris(state.xmlNamespaces).join('\n');
    switch (state.request) {
        case requests[0]:
            return (
                '<wfs:GetCapabilities service="WFS"\n' +
                'xmlns:wfs="http://www.opengis.net/wfs/2.0" \n' +
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
                'xsi:schemaLocation="http://www.opengis.net/wfs/2.0\n' +
                'http://schemas.opengis.net/wfs/2.0/wfs.xsd"/>'
            );
        case requests[1]: {
            if ([noOption, '', null].includes(state.typename)) {
                // display an array in a text area putting its elements on diff lines
                return `<wfs:DescribeFeatureType ${prefixesAndUris}\nversion="${state.version}" service="WFS"/>`;
            }
            return (
                `<wfs:DescribeFeatureType ${prefixesAndUris}\nversion="${state.version}" service="WFS">\n` +
                `<wfs:TypeName>${state.typename}</wfs:TypeName>\n` +
                `</wfs:DescribeFeatureType>`
            );
        }
        case requests[2]:
            return (
                `<wfs:GetPropertyValue service="WFS" version="${state.version}" ${prefixesAndUris}\n` +
                `valueReference="${state.valueReference}">\n` +
                `<wfs:Query typeNames="${state.typename}">\n` +
                ` <fes:SortBy>\n` +
                `  <fes:SortProperty>\n` +
                `   <fes:ValueReference>${state.valueReference}</fes:ValueReference>\n` +
                `   <fes:SortOrder>${state.sortBy}</fes:SortOrder>\n` +
                `  </fes:SortProperty>\n` +
                ` </fes:SortBy>\n` +
                `</wfs:Query>\n` +
                `</wfs:GetPropertyValue>`
            );
        default:
            return '';
    }
};

export { formGetRequest, formPostRequest };
