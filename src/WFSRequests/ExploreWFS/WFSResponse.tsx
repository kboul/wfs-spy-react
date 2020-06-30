import React, { FC, useContext } from 'react';
import axios from 'axios';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TableButtons from '../TableButtons';
import {
    changeWfsResponse,
    changeGetCapResp,
    changeDescFeatTypeResp
} from '../../context/actions';
import { extractTypenames } from '../../shared/wfsMetadata';
import { adjustProxyToUrl, formWfsRequest } from './utils';
import { IWfsResponse } from './models';
import { requests } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const WFSResponse: FC = () => {
    const { state, dispatch }: IContext = useContext(Context);

    const getResponse = async () => {
        dispatch(changeWfsResponse({ wfsResponse: consts.processing }));
        const operationUrl = adjustProxyToUrl(formWfsRequest(state));
        if (operationUrl) {
            const startGET = new Date().getTime();
            const response: IWfsResponse = await axios.get(operationUrl);
            if (response.status === 200) {
                const { data } = response;
                dispatch(changeWfsResponse({ wfsResponse: data }));
                const time = new Date().getTime() - startGET;
                switch (state.request) {
                    case requests[0]:
                        dispatch(
                            changeGetCapResp({
                                getCapResp: data,
                                typenames: extractTypenames(data),
                                getGetCapTime: time
                            })
                        );
                        break;
                    case requests[1]:
                        dispatch(
                            changeDescFeatTypeResp({
                                descFeatTypeResp: data,
                                getDescFeatTypeTime: time
                            })
                        );
                        break;
                    default:
                }
            }
        }
    };

    return (
        <FormGroup className="text-center" row>
            <Col md={{ size: 10, offset: 1 }}>
                <Label for="wfsResponse" className={sharedStyles.labelFont}>
                    {consts.responseMetadata}
                </Label>
                <Input
                    type="textarea"
                    rows="10"
                    className={sharedStyles.textarea}
                    disabled
                    value={state.wfsResponse}
                />
                <TableButtons
                    label={consts.response}
                    hasModal
                    onClick={getResponse}
                    initialState={!state.wfsRequest}
                    isGetRequest={!state.getCapResp}
                />
            </Col>
        </FormGroup>
    );
};

export default WFSResponse;
