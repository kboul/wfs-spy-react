import React, { FC, useContext } from 'react';
import axios from 'axios';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import TableButtons from '../TableButtons';
import {
    setWfsResponse,
    setGetCapResp,
    setDescFeatTypeResp
} from '../../context/actions';
import { extractTypenames } from '../../shared/wfsMetadata';
import { adjustProxyToUrl, formWfsRequest } from './utils';
import { IWfsResponse } from './models';
import { requests } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const WFSResponse: FC = () => {
    const { state, dispatch } = useContext(Context);

    const getResponse = async () => {
        const operationUrl = adjustProxyToUrl(formWfsRequest(state));
        if (operationUrl) {
            const startGET = new Date().getTime();
            const response: IWfsResponse = await axios.get(operationUrl);
            if (response.status === 200) {
                const { data } = response;
                dispatch(setWfsResponse(data));
                const time = new Date().getTime() - startGET;
                switch (state.request) {
                    case requests[0]:
                        dispatch(
                            setGetCapResp({
                                getCapResponse: data,
                                typenames: extractTypenames(data),
                                getGetCapTime: time
                            })
                        );
                        break;
                    case requests[1]:
                        dispatch(
                            setDescFeatTypeResp({
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
                    isGetRequest={!state.getCapResponse}
                />
            </Col>
        </FormGroup>
    );
};

export default WFSResponse;
