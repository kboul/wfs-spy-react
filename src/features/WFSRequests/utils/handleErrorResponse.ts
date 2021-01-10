interface ErrorResponse {
    config: Object;
    data: string;
    headers: Object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}

export default function handleErrorResponse(
    errorResponse: ErrorResponse
): string {
    const { status, data } = errorResponse;
    switch (status) {
        case 400: // Bad Request
            return 'Error 400. Malformed Request.';
        case 404: // Not Found
            return 'Error 404. The server could not find what was requested.';
        case 500: // Internal Server Error
            return data;
        case 503:
            return 'Error 503. Service Unavailable.';
        default:
            return 'An unknown error occured. Please try again.';
    }
}
