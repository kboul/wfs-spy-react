import { requests, noOption } from '../../shared/constants';
import { IState } from '../../context/models';

const adjustProxyToUrl = (url: string): string => {
    return `${process.env.REACT_APP_PROXY_URL}${url}`;
};

const formWfsRequest = (state: IState): string => {
    let { url, version, request, service, typename } = state;
    url = `${url}?\n`;
    version = `version=${version}&\n`;
    request = `request=${request}&\n`;
    service = `service=${service}`;

    switch (state.request) {
        case requests[0]:
            return `${url}${version}${request}${service}`;
        case requests[1]:
            if ([noOption, '', null].includes(typename)) {
                // to include also empty first value
                return `${url}${version}${request}${service}`;
            } else {
                // Request for individual FeatureType ==> should be TypeName
                typename = '&\nTypeName=' + typename;
                return `${url}${version}${request}${service}${typename}`;
            }
        default:
            return '';
    }
};

export { adjustProxyToUrl, formWfsRequest };
