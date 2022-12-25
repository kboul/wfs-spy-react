/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import userEvent from "@testing-library/user-event";

import { renderWithContext, screen, waitFor } from "../../tests/utils";
import WfsRequests from ".";
import globalConsts from "../../constants";
import { consts as urlConsts } from "./ExploreWFS/Url";
import wfsReqConsts from "./ExploreWFS/WfsRequest/constants";
import wfsRespConsts from "./ExploreWFS/WFSResponse/constants";
// import { consts as typenameConsts } from './ExploreWFS/Typename';
import { consts as valReferConsts } from "./ExploreWFS/ValueReference";
// import { consts as compOperConsts } from './FilterWFS/CompOperDropDown';

const url = "http://kort.strandnr.dk/geoserver/nobc/wfs";
const getWfsRequest = `${url}?
version=2.0.0&
request=GetCapabilities&
service=WFS`;

// jest.setTimeout(30000);

test.skip("GET request GetCapabilities response", async () => {
  renderWithContext(<WfsRequests />);

  const urlTextarea = screen.getByLabelText(urlConsts.label);
  userEvent.type(urlTextarea, url);

  // click on GET Request btn
  const getRequestBtn = screen.getByRole("button", {
    name: wfsReqConsts.getReqBtnLabel
  });
  userEvent.click(getRequestBtn);
  // textarea has the GET GetCapabilities request formed
  const wfsRequestTextarea = screen.getByRole("textbox", {
    name: wfsReqConsts.label
  });
  expect(wfsRequestTextarea).toHaveValue(getWfsRequest);

  // click on GET Response btn
  const getResponseBtn = screen.getByRole("button", {
    name: wfsRespConsts.getRespBtnLabel
  });
  userEvent.click(getResponseBtn);

  const wfsResponseTextarea = screen.getByRole("textbox", {
    name: wfsRespConsts.label
  });
  expect(wfsResponseTextarea).toHaveValue(globalConsts.proccessMessage);

  await waitFor(() => {
    // WFS Response textarea
    expect(wfsResponseTextarea).not.toHaveValue("");
    expect(wfsResponseTextarea).not.toHaveValue(globalConsts.proccessMessage);

    // typeName
    // const typeNameDropdown = screen.getByLabelText(typenameConsts.label);
    // expect(typeNameDropdown).toHaveValue(globalConsts.noOption);
    // expect(typeNameDropdown.children).toHaveLength(10);

    // console.log(screen.debug(undefined, 300000));

    // valueReference
    const valueReferenceDropdown = screen.getByLabelText(valReferConsts.label);
    expect(valueReferenceDropdown).toBeDisabled();

    // const compOperDropdown = screen.getByLabelText(compOperConsts.label);
    // expect(compOperDropdown.children).toBeGreaterThan(0);
  });
});
