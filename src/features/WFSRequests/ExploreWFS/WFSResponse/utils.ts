const adjustProxyToUrl = (url: string): string => {
    return `${process.env.REACT_APP_PROXY_URL}${url}`;
};

export { adjustProxyToUrl };
