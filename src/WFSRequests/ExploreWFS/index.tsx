import React, { FC, useContext } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Context from '../../context';
import TableButtons from '../TableButtons';
import useInputFocus from './hooks';
import {
    setWfsResponse,
    setWfsRequest,
    setTypenames,
    setGetCapResponse,
    setUrl,
    setVersion,
    setRequest,
    setTypename
} from '../../context/actions';
import { extractTypenames } from '../../shared/wfsMetadata';
import { adjustProxyToUrl, formWfsRequest } from './utils';
import { IExploreWFS, IWfsResponse } from './models';
import { versions, requests } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';
import styles from './index.module.sass';

const ExploreWFS: FC<IExploreWFS> = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;
    const { urlRef, urlBackgroud, onFocus, onBlur } = useInputFocus();
    const { state, dispatch } = useContext(Context);

    const displayGetRequest = () => {
        if (state.request === requests[1]) dispatch(setWfsResponse(''));
        dispatch(setWfsRequest(formWfsRequest(state)));
    };

    const getResponse = async () => {
        const operationUrl = adjustProxyToUrl(formWfsRequest(state));
        if (operationUrl) {
            const { data }: IWfsResponse = await axios.get(operationUrl);
            dispatch(setWfsResponse(data));
            if (state.request === requests[0]) {
                dispatch(setTypenames(extractTypenames(data)));
                dispatch(setGetCapResponse(data));
            }
        }
    };

    return (
        <Col md="6" className={styles.description}>
            <h4 className={sharedStyles.header}>{consts.header}</h4>
            <Form noValidate>
                <FormGroup row>
                    <Label for="url" md={2} className={urlStyle}>
                        {consts.url}
                    </Label>
                    <Col md={9}>
                        <Input
                            type="textarea"
                            rows="3"
                            style={{ backgroundColor: urlBackgroud }}
                            className={`${sharedStyles.textarea} form-control ${
                                state.errors.url && 'is-invalid'
                            } `}
                            innerRef={urlRef}
                            value={state.url}
                            onChange={e => dispatch(setUrl(e.target.value))}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            required
                        />
                        {state.errors.url && (
                            <div className="invalid-feedback">
                                {state.errors.url}
                            </div>
                        )}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="version"
                        md={2}
                        className={sharedStyles.labelFont}>
                        {consts.version}
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            value={state.version}
                            onChange={e =>
                                dispatch(setVersion(e.target.value))
                            }>
                            {versions.map(version => (
                                <option key={version}>{version}</option>
                            ))}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="request"
                        md={2}
                        className={sharedStyles.labelFont}>
                        {consts.requestOperation}
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            value={state.request}
                            onChange={e =>
                                dispatch(setRequest(e.target.value))
                            }>
                            {requests.map(request => (
                                <option key={request}>{request}</option>
                            ))}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="service"
                        md={2}
                        className={sharedStyles.labelFont}>
                        {consts.service}
                    </Label>
                    <Col md={9}>
                        <Input type="text" value={state.service} disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="typeName"
                        md={2}
                        className={sharedStyles.labelFont}>
                        {consts.typename}
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            disabled={!state.typenames.length}
                            value={state.typename}
                            onChange={e =>
                                dispatch(setTypename(e.target.value))
                            }>
                            {state.typenames.map((typename: string) => (
                                <option key={typename}>{typename}</option>
                            ))}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="valueRefer"
                        md={2}
                        className={sharedStyles.labelFont}>
                        {consts.valueRefer}
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            disabled
                            value={state.valueRefer}
                            onChange={e =>
                                dispatch(setTypename(e.target.value))
                            }
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="sortBy"
                        md={2}
                        className={`${sharedStyles.labelFont} mb-2`}>
                        {consts.sortBy}
                    </Label>
                    <Col md={9}>
                        <Input type="text" value={state.sortBy} disabled />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Label
                            for="wfsRequest"
                            className={sharedStyles.labelFont}>
                            {consts.formWfsRequest}
                        </Label>
                        <Input
                            type="textarea"
                            rows="10"
                            className={sharedStyles.textarea}
                            disabled
                            value={state.wfsRequest}
                        />
                        <TableButtons
                            label={consts.request}
                            onClick={displayGetRequest}
                        />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Label
                            for="wfsResponse"
                            className={sharedStyles.labelFont}>
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
            </Form>
        </Col>
    );
};

export default ExploreWFS;
