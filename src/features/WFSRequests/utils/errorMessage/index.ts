interface ErrorResponse {
    config: Object;
    data: string;
    headers: Object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}

const unknownError = 'An unknown error occured. Please try again.';

export default function errorMessage(errorResponse: ErrorResponse): string {
    if (!errorResponse) return unknownError;

    const { status, data } = errorResponse;
    const httpStatusCode = 'HTTP Status Code';
    switch (status) {
        case 400: // Bad Request
            return `${httpStatusCode} 400. Malformed Request.`;
        case 403: // Forbidden
            return `${httpStatusCode} 403. Access to the requested resource is forbidden.`;
        case 404: // Not Found
            return `${httpStatusCode} 404. The server could not find what was requested.`;
        case 500: // Internal Server Error
            return data;
        case 502:
            return `${httpStatusCode} 502. Bad Gateway.`;
        case 503:
            return `${httpStatusCode} 503. Service Unavailable.`;
        default:
            return unknownError;
    }
}
