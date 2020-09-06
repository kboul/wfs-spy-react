import { requests, noOption } from '../../../shared/constants';
import { State } from '../../../context/models';

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

    const basicRequest = `${url}?\nversion=${version}&\nrequest=${request}&\nservice=${service}`;

    switch (state.request) {
        case requests[0]:
            return basicRequest;
        case requests[1]:
            if ([noOption, '', null].includes(typename)) {
                // to include also empty first value
                return basicRequest;
            }
            // Request for individual FeatureType ==> should be TypeName
            return `${basicRequest}\n&TypeName=${typename}`;
        case requests[2]:
            return `${basicRequest}\n&typeNames=${typename}\n&valueReference=${valueReference}\n&sortBy=${valueReference}+${sortBy}`;
        default:
            return '';
    }
};

export { formWfsRequest };
