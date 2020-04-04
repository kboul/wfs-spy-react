import React, { FC, useState } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import TableButtons from '../TableButtons';
import useForm from './hooks';
import { validateForm, formWfsRequest } from './utils';
import { IExploreWFS, WfsResponse } from './model';
import { versions, requests } from './constants';
import sharedStyles from '../shared.module.sass';
import styles from './index.module.sass';

const ExploreWFS: FC<IExploreWFS> = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;
    const [wfsRequest, setWfsRequest] = useState<string>('');
    const [wfsResponse, setWfsResponse] = useState<string>('');

    const displayGetRequest = () => setWfsRequest(formWfsRequest(values));
    const onGetResponseClick = async () => {
        const request = formWfsRequest(values);
        if (request) {
            const { data }: WfsResponse = await axios.get(request);
            setWfsResponse(data);
        }
    };

    const { values, onChange, onSubmit, errors } = useForm(
        displayGetRequest,
        {
            url: '',
            version: versions[0],
            request: requests[0],
            service: 'WFS',
            typename: '',
            valueRefer: '',
            sortBy: 'ASC'
        },
        validateForm
    );

    return (
        <Col md="6" className={styles.description}>
            <h4 className={sharedStyles.header}>
                Service and Feature Description
            </h4>
            <Form noValidate>
                <FormGroup row>
                    <Label for="url" md={2} className={urlStyle}>
                        URL
                    </Label>
                    <Col md={9}>
                        <Input
                            type="textarea"
                            rows="3"
                            className={`${sharedStyles.textarea} form-control ${
                                errors.url && 'is-invalid'
                            }`}
                            name="url"
                            value={values.url}
                            onChange={onChange}
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
                        Version
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            value={values.version}
                            name="version"
                            onChange={onChange}>
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
                        Request
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            name="request"
                            value={values.request}
                            onChange={onChange}>
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
                        Service
                    </Label>
                    <Col md={9}>
                        <Input type="text" value="WFS" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="typeName"
                        md={2}
                        className={sharedStyles.labelFont}>
                        typeName
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            disabled
                            name="typename"
                            value={values.typename}
                            onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="valueRefer"
                        md={2}
                        className={sharedStyles.labelFont}>
                        valueRefer.
                    </Label>
                    <Col md={9}>
                        <Input
                            type="select"
                            disabled
                            name="valueRefer"
                            value={values.valueRefer}
                            onChange={onChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="sortBy"
                        md={2}
                        className={`${sharedStyles.labelFont} mb-2`}>
                        Sort By
                    </Label>
                    <Col md={9}>
                        <Input type="text" value="ASC" disabled />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Label
                            for="wfsRequest"
                            className={sharedStyles.labelFont}>
                            Form WFS Request:
                        </Label>
                        <Input
                            type="textarea"
                            rows="10"
                            className={sharedStyles.textarea}
                            disabled
                            value={wfsRequest}
                        />
                        <TableButtons label="Request" onClick={onSubmit} />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Label
                            for="wfsResponse"
                            className={sharedStyles.labelFont}>
                            Response - Metadata & Corresponding operations:
                        </Label>
                        <Input
                            type="textarea"
                            rows="10"
                            className={sharedStyles.textarea}
                            disabled
                            value={wfsResponse}
                        />
                        <TableButtons
                            label="Response"
                            hasModal
                            onClick={onGetResponseClick}
                            disabled={values.url === ''}
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    );
};

export default ExploreWFS;
