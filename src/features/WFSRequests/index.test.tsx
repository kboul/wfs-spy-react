import userEvent from '@testing-library/user-event';

import ExploreWFS from './ExploreWFS';
import { renderWithContext, screen } from '../../tests/utils';
import globalConsts from '../../constants';
import { consts as urlConsts } from './ExploreWFS/Url';
import wfsReqConsts from './ExploreWFS/WfsRequest/constants';
import wfsRespConsts from './ExploreWFS/WfsResponse/constants';

const url = 'http://kort.strandnr.dk/geoserver/nobc/wfs';
const getWfsRequest = `${url}?
version=2.0.0&
request=GetCapabilities&
service=WFS`;

test('GET request GetCapabilities response', async () => {
    renderWithContext(<ExploreWFS />);

    const urlTextarea = screen.getByLabelText(urlConsts.label);
    userEvent.type(urlTextarea, url);

    // click on GET Request btn
    const getRequestBtn = screen.getByRole('button', {
        name: wfsReqConsts.getReqBtnLabel
    });
    userEvent.click(getRequestBtn);
    // textarea has the GET GetCapabilities request formed
    const wfsRequestTextarea = screen.getByRole('textbox', {
        name: wfsReqConsts.label
    });
    expect(wfsRequestTextarea).toHaveValue(getWfsRequest);

    // click on GET Response btn
    const getResponseBtn = screen.getByRole('button', {
        name: wfsRespConsts.getRespBtnLabel
    });
    userEvent.click(getResponseBtn);

    const wfsResponseTextarea = await screen.findByRole('textbox', {
        name: wfsRespConsts.label
    });
    expect(wfsResponseTextarea).toHaveValue(globalConsts.proccessMessage);

    // console.log(screen.debug());
});
