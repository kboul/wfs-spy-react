import { iValues, Errors } from './models';
import { requests } from './constants';

const validateForm = (values: iValues): Errors => {
    const errors: Errors = {};
    if (values.url === '') {
        errors.url = 'Url is required';
    }
    return errors;
};

const adjustProxyToUrl = (url: string): string => {
    return `${process.env.REACT_APP_PROXY_URL}${url}`;
};

const formWfsRequest = (values: iValues): string => {
    let { url, version, request, service, typename } = values;
    url = `${adjustProxyToUrl(url)}?\n`;
    version = `version=${version}&\n`;
    request = `request=${request}&\n`;
    service = `service=${service}`;

    switch (values.request) {
        case requests[0]:
            return `${url}${version}${request}${service}`;
        case requests[1]:
            if (['---', '', null].includes(typename)) {
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

const parseXML = (response: string): Object => {
    const parser = new DOMParser();
    return parser.parseFromString(response, 'text/xml');
};

export { validateForm, formWfsRequest, parseXML };
