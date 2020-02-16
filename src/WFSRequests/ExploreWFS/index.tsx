import React, { FC } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import TableButtons from '../TableButtons';
import styles from './index.module.sass';
import sharedStyles from '../shared.module.sass';

interface IExploreWFS {}

const ExploreWFS: FC<IExploreWFS> = () => {
    const urlStyle = `${sharedStyles.labelFont} ${styles.url}`;
    return (
        <Col md="6" className={styles.description}>
            <h4 className={sharedStyles.header}>
                Service and Feature Description
            </h4>
            <Form>
                <FormGroup row>
                    <Label for="url" md={2} className={urlStyle}>
                        URL
                    </Label>
                    <Col md={9}>
                        <Input
                            type="textarea"
                            rows="3"
                            className={sharedStyles.textarea}
                        />
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
                        <Input type="select">
                            <option>2.0.0</option>
                            <option>2.0.2</option>
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
                        <Input type="select">
                            <option>GetCapabilities</option>
                            <option>DescribeFeatureType</option>
                            <option>GetPropertyValue</option>
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
                        <Input type="select" disabled />
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
                        <Input type="select" disabled />
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
                            for="formWfsRequest"
                            className={sharedStyles.labelFont}>
                            Form WFS Request:
                        </Label>
                        <Input
                            type="textarea"
                            rows="10"
                            className={sharedStyles.textarea}
                            disabled
                        />
                        <TableButtons label="" />
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
                        />
                        <TableButtons label="" hasModal />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    );
};

export default ExploreWFS;
