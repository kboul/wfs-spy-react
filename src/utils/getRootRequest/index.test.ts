import getRootRequest from '.';

test('returns WFS GET request url given a service url, version and request', () => {
    const url = 'http://daim.lfv.se/geoserver/wfs';
    const version = '2.0.0';
    const request = 'GetCapabilities';
    const service = 'WFS';
    const expectedOutput = `${url.trim()}?\nversion=${version}&\nrequest=${request}&\nservice=${service}`;
    expect(getRootRequest(url, version, request, service)).toBe(expectedOutput);
});
