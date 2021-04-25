import isMethodGet from '../isMethodGet';

interface ReturnType {
    getRequestClicked?: boolean;
    postRequestClicked?: boolean;
    getFilterRequestClicked?: boolean;
    postFilterRequestClicked?: boolean;
}

export default function requestBtnStatus(
    httpMethod: string,
    request?: 'normal' | 'filter'
): ReturnType {
    if (request) {
        if (isMethodGet(httpMethod))
            return {
                getFilterRequestClicked: true,
                postFilterRequestClicked: false
            };
        return {
            getFilterRequestClicked: false,
            postFilterRequestClicked: true
        };
    }

    if (isMethodGet(httpMethod))
        return {
            getRequestClicked: true,
            postRequestClicked: false
        };
    return {
        getRequestClicked: false,
        postRequestClicked: true
    };
}
