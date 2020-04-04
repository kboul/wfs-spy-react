import { iValues } from './model';

const validateForm = (values: iValues): iValues => {
    const errors: any = {};
    if (values.url === '') {
        errors.url = 'Url is required';
    }
    return errors;
};

const adjustProxyToUrl = (url: string): string => {
    return `${process.env.REACT_APP_PROXY_URL}${url}`;
};

const formWfsRequest = (values: iValues): string => {
    const url = adjustProxyToUrl(values.url) + '?\n';
    const version = 'version=' + values.version + '&\n';
    const request = 'request=' + values.request + '&\n';
    const service = 'service=' + values.service;

    switch (values.request) {
        case 'GetCapabilities':
            return url.concat(version, request, service);
        default:
            return '';
    }
};

export { validateForm, formWfsRequest };
