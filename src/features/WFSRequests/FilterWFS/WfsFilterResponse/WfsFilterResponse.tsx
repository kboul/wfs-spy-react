import { FormGroup, Col, Label, Input } from "reactstrap";

import TableButtons from "../../TableButtons";
import { useAppContext, changeState, types } from "../../../../context";
import wfsApi from "../../../../api/wfsApi";
import { isMethodGet } from "../../utils";
import {
  adjustProxyToUrl,
  errorMessage,
  getOrPost,
  getTimeInMs
} from "../../../../utils";
import { formGetFilterRequest, formPostFilterRequest } from "../utils";
import globalConsts from "../../../../constants";
import { id, label } from "./constants";
import sharedStyles from "../../shared.module.sass";

export default function WfsFilterResponse() {
  const { state, dispatch } = useAppContext();

  const disabled = !state.getPropValResp || !state.wfsFilterRequest;

  const changeWfsFilterResponse = (wfsFilterResponse: string) => {
    dispatch(
      changeState(types.wfsFilterResponseChanged, { wfsFilterResponse })
    );
  };

  const requestMethod = async (httpMethod: string) => {
    const wfsRequest = isMethodGet(httpMethod)
      ? formGetFilterRequest(state)
      : formPostFilterRequest(state);
    return isMethodGet(httpMethod)
      ? wfsApi.getWfsRequest(adjustProxyToUrl(wfsRequest))
      : wfsApi.postWfsRequest(adjustProxyToUrl(state.url), wfsRequest);
  };

  const handleClick = async (httpMethod: string) => {
    changeWfsFilterResponse(globalConsts.proccessMessage);
    const startGET = getTimeInMs();
    try {
      const { data, status } = await requestMethod(httpMethod);
      if (status === 200) {
        changeWfsFilterResponse(data);
        const time = getTimeInMs() - startGET;
        const payload = {
          getPropValFiltResp: data,
          [`${getOrPost(httpMethod)}GetPropValFiltTime`]: time
        };
        dispatch(changeState(types.getPropValFiltRespChanged, payload));
      }
    } catch (error: any) {
      changeWfsFilterResponse(errorMessage(error.response));
    }
  };

  const handleModalClick = (httpMethod: string) => {
    dispatch(changeState(types.modalToggled, { modalOperation: "filter" }));
    handleClick(httpMethod);
  };

  return (
    <FormGroup className="text-center" row>
      <Col md={{ size: 10, offset: 1 }}>
        <Label className={sharedStyles.labelFont} for={id}>
          {label}
        </Label>
        <Input
          className={sharedStyles.textarea}
          disabled
          id={id}
          rows="10"
          type="textarea"
          value={state.wfsFilterResponse}
        />
        <TableButtons
          disabled={disabled}
          hasModal
          label="Filter Response"
          onGetClick={() => handleClick("GET")}
          onGetModalClick={() => handleModalClick("GET")}
          onPostClick={() => handleClick("POST")}
          onPostModalClick={() => handleModalClick("POST")}
        />
      </Col>
    </FormGroup>
  );
}
