import React, { FC } from 'react';
import { Col, Form } from 'reactstrap';
import SelectedTypValueRefer from './SelectedTypValueRefer';
import ValueCount from './ValueCount';
import MinValue from './MinValue';
import MaxValue from './MaxValue';
import FilteredValueCount from './FilteredValueCount';
import AddSortByASC from './AddSortByASC';
import CompOperDropDown from './CompOperDropDown';
import WFSFilterRequest from './WFSFilterRequest';
import consts from './constants';
import sharedStyles from '../shared.module.sass';
import styles from './index.module.sass';
import WFSFilterResponse from './WFSFilterResponse';

const FilterWFS: FC = () => {
    return (
        <Col md="6" className={styles.propValueFilter}>
            <h4 className={sharedStyles.header}>{consts.header}</h4>
            <Form>
                <SelectedTypValueRefer />
                <ValueCount />
                <MinValue />
                <MaxValue />
                <CompOperDropDown />
                <FilteredValueCount />
                <AddSortByASC />
                <WFSFilterRequest />
                <WFSFilterResponse />
            </Form>
        </Col>
    );
};

export default FilterWFS;
