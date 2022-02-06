import errorResponses from './constants';

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

    switch (status) {
        case 400: // Bad Request
            return errorResponses['400'];
        case 403: // Forbidden
            return errorResponses['403'];
        case 404: // Not Found
            return errorResponses['404'];
        case 500: // Internal Server Error
            return data;
        case 502:
            return errorResponses['502'];
        case 503:
            return errorResponses['503'];
        default:
            return unknownError;
    }
}
