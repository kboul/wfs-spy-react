import { iValues, Errors } from './models';

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
    let { url, version, request, service } = values;
    url = `${adjustProxyToUrl(url)}?\n`;
    version = `version=${version}&\n`;
    request = `request=${request}&\n`;
    service = `service=${service}`;

    switch (values.request) {
        case 'GetCapabilities':
            return `${url}${version}${request}${service}`;
        default:
            return '';
    }
};

export { validateForm, formWfsRequest };
