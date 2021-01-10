import { getRootRequest } from '../../../utils';
import { State } from '../../../context/models';
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

const formPostRequest = (state: State): string => {
    switch (state.request) {
        case requests[0]:
            return (
                '<wfs:GetCapabilities service="WFS"\n' +
                'xmlns:wfs="http://www.opengis.net/wfs/2.0" \n' +
                'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
                'xsi:schemaLocation="http://www.opengis.net/wfs/2.0\n' +
                'http://schemas.opengis.net/wfs/2.0/wfs.xsd"/>'
            );
        default:
            return '';
    }
};

export { formGetRequest, formPostRequest };
