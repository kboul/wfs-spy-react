import adjustProxyToUrl from '.';

test('returns the input with the proxy url', () => {
    const input =
        'http://gis.epa.ie/geoserver/wfs?version=2.0.0&request=GetCapabilities&service=WFS';
    const url = adjustProxyToUrl(input);
    expect(url).toEqual(`${process.env.REACT_APP_PROXY_URL}${input}`);
});
