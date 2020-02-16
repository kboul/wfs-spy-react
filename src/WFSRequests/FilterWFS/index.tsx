import React, { FC } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import TableButtons from '../TableButtons';
import styles from './index.module.sass';
import sharedStyles from '../shared.module.sass';

interface IFilterWFS {}

const FilterWFS: FC<IFilterWFS> = () => {
    const selectedTypenameStyle = `${sharedStyles.labelFont} ${styles.labelSelectedTypename}`;

    return (
        <Col md="6" className={styles.propValueFilter}>
            <h4 className={sharedStyles.header}>Property Value Filter</h4>
            <Form>
                <FormGroup row>
                    <Label
                        for="selectedTypename"
                        md={3}
                        className={selectedTypenameStyle}>
                        Selected typeName & valueReference
                    </Label>
                    <Col md={8}>
                        <Input
                            type="textarea"
                            rows="3"
                            className={sharedStyles.textarea}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="valueCount"
                        md={3}
                        className={sharedStyles.labelFont}>
                        Value count
                    </Label>
                    <Col md={8}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="minValue"
                        md={3}
                        className={sharedStyles.labelFont}>
                        Minimum value
                    </Label>
                    <Col md={8}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="maxValue"
                        md={3}
                        className={sharedStyles.labelFont}>
                        Maximum value
                    </Label>
                    <Col md={8}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="comparisonOperators"
                        md={3}
                        className={sharedStyles.labelFont}>
                        Comparison oper.
                    </Label>
                    <Col md={8}>
                        <Input type="select" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="filValueCount"
                        md={3}
                        className={sharedStyles.labelFont}>
                        Filtered value count
                    </Label>
                    <Col md={8}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="addSortBy"
                        md={3}
                        className={sharedStyles.labelFont}>
                        Add SortBy ASC
                    </Label>
                    <Col md={8}>
                        <Input type="select" disabled />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 9, offset: 2 }}>
                        <Label
                            for="formWfsFilterRequest"
                            className={sharedStyles.labelFont}>
                            Form WFS GetPropertyValue Filter Request:
                        </Label>
                        <Input
                            type="textarea"
                            rows="10"
                            className={sharedStyles.textarea}
                            disabled
                        />
                        <TableButtons label="Filter" />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 9, offset: 2 }}>
                        <Label
                            for="wfsFilterResponse"
                            className={sharedStyles.labelFont}>
                            Filtered Response - Metadata using Filter
                            parameters:
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

export default FilterWFS;
