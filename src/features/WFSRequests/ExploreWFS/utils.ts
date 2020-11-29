import { getRootRequest } from '../../../shared/utils';
import { State } from '../../../context/models';
import { requests, noOption } from '../../../shared/constants';

const formWfsRequest = (state: State): string => {
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

export { formWfsRequest };
