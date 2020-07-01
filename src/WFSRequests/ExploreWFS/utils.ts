import { requests, noOption } from '../../shared/constants';
import { IState } from '../../context/models';

const adjustProxyToUrl = (url: string): string => {
    return `${process.env.REACT_APP_PROXY_URL}${url}`;
};

const formWfsRequest = (state: IState): string => {
    let {
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
            } else {
                // Request for individual FeatureType ==> should be TypeName
                return `${basicRequest}\n&TypeName=${typename}`;
            }
        case requests[2]:
            return `${basicRequest}\n&typeNames=${typename}\n&valueReference=${valueReference}\n&sortBy=${valueReference}+${sortBy}`;
        default:
            return '';
    }
};

export { adjustProxyToUrl, formWfsRequest };
