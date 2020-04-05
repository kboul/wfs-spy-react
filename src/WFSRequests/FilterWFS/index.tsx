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
                        md={4}
                        className={selectedTypenameStyle}>
                        Selected typeName & valueReference
                    </Label>
                    <Col md={7}>
                        <Input
                            type="textarea"
                            rows="3"
                            className={sharedStyles.textarea}
                            disabled
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="valueCount"
                        md={4}
                        className={sharedStyles.labelFont}>
                        Value count
                    </Label>
                    <Col md={7}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="minValue"
                        md={4}
                        className={sharedStyles.labelFont}>
                        Minimum value
                    </Label>
                    <Col md={7}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="maxValue"
                        md={4}
                        className={sharedStyles.labelFont}>
                        Maximum value
                    </Label>
                    <Col md={7}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="comparisonOperators"
                        md={4}
                        className={sharedStyles.labelFont}>
                        Comparison oper.
                    </Label>
                    <Col md={7}>
                        <Input type="select" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="filValueCount"
                        md={4}
                        className={sharedStyles.labelFont}>
                        Filtered value count
                    </Label>
                    <Col md={7}>
                        <Input type="text" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="addSortByAsc"
                        md={4}
                        className={`${sharedStyles.labelFont} mb-2`}>
                        Add SortBy ASC
                    </Label>
                    <Col md={7}>
                        <Input type="select" disabled />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 10, offset: 1 }}>
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
                        <TableButtons
                            label="Filter Request"
                            initialState
                            onClick={() => {}}
                        />
                    </Col>
                </FormGroup>
                <FormGroup className="text-center" row>
                    <Col md={{ size: 10, offset: 1 }}>
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
                        <TableButtons
                            label="Filter Response"
                            hasModal
                            initialState
                            onClick={() => {}}
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    );
};

export default FilterWFS;
