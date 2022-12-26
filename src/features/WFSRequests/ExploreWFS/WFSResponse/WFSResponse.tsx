import { Col, FormGroup, Label, Input } from "reactstrap";

import TableButtons from "../../TableButtons";
import { useAppContext, changeState, types } from "../../../../context";
import wfsApi from "../../../../api/wfsApi";
import {
  changeDescFeatTypeResp,
  changeGetCapResp,
  changeGetPropValResp
} from "./actions";
import { formGetRequest, formPostRequest } from "../utils";
import { getTimeInMs, errorMessage, isMethodGet } from "../../utils";
import { adjustProxyToUrl } from "../../../../utils";
import globalConsts from "../../../../constants";
import consts from "./constants";
import sharedStyles from "../../shared.module.sass";

const { proccessMessage, requests } = globalConsts;

export default function WFSResponse() {
  const { state, dispatch } = useAppContext();

  const changeWfsResponse = (wfsResponse: string) => {
    dispatch(changeState(types.wfsResponseChanged, { wfsResponse }));
  };

  const requestMethod = async (httpMethod: string) => {
    const wfsRequest = isMethodGet(httpMethod)
      ? formGetRequest(state)
      : formPostRequest(state);
    return isMethodGet(httpMethod)
      ? wfsApi.getWfsRequest(adjustProxyToUrl(wfsRequest))
      : wfsApi.postWfsRequest(adjustProxyToUrl(state.url), wfsRequest);
  };

  const handleClick = async (httpMethod: string) => {
    changeWfsResponse(proccessMessage);
    const startGET = getTimeInMs();
    try {
      const { data, status } = await requestMethod(httpMethod);
      if (status === 200) {
        changeWfsResponse(data);
        const time = getTimeInMs() - startGET;
        switch (state.request) {
          case requests[0]:
            changeGetCapResp(httpMethod, dispatch, data, time);
            break;
          case requests[1]:
            changeDescFeatTypeResp(httpMethod, dispatch, data, time);
            break;
          case requests[2]:
            changeGetPropValResp(httpMethod, dispatch, data, time);
            break;
          default:
        }
      }
    } catch (error: any) {
      changeWfsResponse(errorMessage(error.response));
    }
  };

  const handleModalClick = (httpMethod: string) => {
    dispatch(changeState(types.modalToggled, { modalOperation: "normal" }));
    handleClick(httpMethod);
  };

  return (
    <FormGroup className="text-center" row>
      <Col md={{ size: 10, offset: 1 }}>
        <Label className={sharedStyles.labelFont} for={consts.id}>
          {consts.label}
        </Label>
        <Input
          className={sharedStyles.textarea}
          id={consts.id}
          disabled
          rows="10"
          type="textarea"
          value={state.wfsResponse}
        />
        <TableButtons
          disabled={!state.wfsRequest}
          hasModal
          label={consts.buttonsLabel}
          onGetClick={() => handleClick("GET")}
          onGetModalClick={() => handleModalClick("GET")}
          onPostClick={() => handleClick("POST")}
          onPostModalClick={() => handleModalClick("POST")}
        />
      </Col>
    </FormGroup>
  );
}
