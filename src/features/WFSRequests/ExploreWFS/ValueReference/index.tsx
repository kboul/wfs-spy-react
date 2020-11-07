import React, { useEffect, useRef } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import { useAppContext, changeValueReference } from '../../../../context';
import { selectedTypename } from '../../../../shared/utils';
import { disableGeometry } from './utils';
import { ChangeEvent } from '../../../../shared/models';
import consts from '../constants';
import sharedStyles from '../../shared.module.sass';

export default function ValueReference() {
    const { state, dispatch } = useAppContext();

    const handleChange = (e: ChangeEvent) =>
        dispatch(changeValueReference({ valueReference: e.target.value }));

    const { typename, valueReferences } = state;
    const currentSelectedTypename = selectedTypename(typename);

    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            if (!typename || !Object.keys(valueReferences.names).length) return;
            if (valueReferences?.names[currentSelectedTypename]) {
                const valueReference =
                    valueReferences?.names[currentSelectedTypename][0];
                dispatch(changeValueReference({ valueReference }));
            }
        } else didMountRef.current = true;
        // eslint-disable-next-line
    }, [typename, valueReferences, dispatch]);

    const disabled = (index: number) =>
        disableGeometry(valueReferences?.types[currentSelectedTypename][index]);

    return (
        <FormGroup row>
            <Label className={sharedStyles.labelFont} for="valueRefer" md={2}>
                {consts.valueReference}
            </Label>
            <Col md={9}>
                <Input
                    disabled={!state.descFeatTypeResp}
                    onChange={handleChange}
                    type="select"
                    value={state.valueReference}>
                    {valueReferences?.names[currentSelectedTypename]?.map(
                        (valueRefer: string, index: number) => (
                            <option
                                key={`value-reference-${index}`}
                                disabled={disabled(index)}>
                                {valueRefer}
                            </option>
                        )
                    )}
                </Input>
            </Col>
        </FormGroup>
    );
}
