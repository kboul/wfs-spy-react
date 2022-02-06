const httpStatusCode = 'HTTP Status Code';

export default {
    400: `${httpStatusCode} 400. Malformed Request.`,
    403: `${httpStatusCode} 403. Access to the requested resource is forbidden.`,
    404: `${httpStatusCode} 404. The server could not find what was requested.`,
    502: `${httpStatusCode} 502. Bad Gateway.`,
    503: `${httpStatusCode} 503. Service Unavailable.`
};
