import React, { FC, useState, useContext } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Context from '../../context';
import types from '../../context/types';
import TableButtons from '../TableButtons';
import { useForm, useInputFocus } from './hooks';
import { extractTypenames } from '../../shared/wfsMetadata';
import { validateForm, adjustProxyToUrl, formWfsRequest } from './utils';
import { IExploreWFS, IWfsResponse } from './models';
import { versions, requests } from '../../shared/constants';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';
import styles from './index.module.sass';

const ExploreWFS: FC<IExploreWFS> = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;
    const [isGetRequest, setIsGetRequest] = useState<boolean>(false);
    const { urlRef, urlBackgroud, onFocus, onBlur } = useInputFocus();
    const { state, dispatch } = useContext(Context);

    const displayGetRequest = () => {
        if (values.request === requests[1]) {
            dispatch({
                type: types.SET_WFS_RESPONSE,
                payload: ''
            });
        }
        dispatch({
            type: types.SET_WFS_REQUEST,
            payload: formWfsRequest(state)
        });
        setIsGetRequest(true);
    };

    const onGetResponseClick = async () => {
        const operationUrl = adjustProxyToUrl(formWfsRequest(state));
        if (operationUrl) {
            const { data }: IWfsResponse = await axios.get(operationUrl);
            dispatch({
                type: types.SET_WFS_RESPONSE,
                payload: data
            });
            if (values.request === requests[0]) {
                dispatch({
                    type: types.SET_TYPENAMES,
                    payload: extractTypenames(data)
                });
                dispatch({
                    type: types.SET_GET_CAP_RESPONSE,
                    payload: data
                });
            }
        }
    };

    const { values, onChange, onSubmit, errors } = useForm(
        {
            url: state.url,
            version: state.version,
            request: state.request,
            valueRefer: ''
        },
        displayGetRequest,
        validateForm
    );

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
                                errors.url && 'is-invalid'
                            } `}
                            name="url"
                            innerRef={urlRef}
                            value={values.url}
                            onChange={e => onChange('url', e)}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            required
                        />
                        {errors.url && (
                            <div className="invalid-feedback">{errors.url}</div>
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
                            value={values.version}
                            name="version"
                            onChange={e => onChange('version', e)}>
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
                        {consts.request}
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            name="request"
                            value={values.request}
                            onChange={e => onChange('request', e)}>
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
                            name="typename"
                            value={state.typename}
                            onChange={e => onChange('typename', e)}>
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
                            name="valueRefer"
                            value={values.valueRefer}
                            onChange={e => onChange('valueRefer', e)}
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
                            label={consts.Request}
                            onClick={onSubmit}
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
                            label={consts.Response}
                            hasModal
                            onClick={onGetResponseClick}
                            initialState={state.wfsRequest === ''}
                            isGetRequest={isGetRequest}
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    );
};

export default ExploreWFS;
