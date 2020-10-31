import React, { useContext, useEffect, useRef } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

import Context, { ContextProps } from '../../../../context';
import { changeValueReference } from '../../../../context/actions';
import { selectedTypename } from '../../../../shared/utils';
import { ChangeEvent } from '../../../../shared/models';
import { disableGeometry } from './utils';
import consts from '../constants';
import sharedStyles from '../../shared.module.sass';

const ValueReference = () => {
    const { state, dispatch } = useContext<ContextProps>(Context);

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

    return (
        <FormGroup row>
            <Label for="valueRefer" md={2} className={sharedStyles.labelFont}>
                {consts.valueReference}
            </Label>
            <Col md={9}>
                <Input
                    type="select"
                    disabled={!state.descFeatTypeResp}
                    value={state.valueReference}
                    onChange={handleChange}>
                    {valueReferences?.names[currentSelectedTypename]?.map(
                        (valueRefer: string, index: number) => (
                            <option
                                key={`value-reference-${index}`}
                                disabled={disableGeometry(
                                    valueReferences?.types[
                                        currentSelectedTypename
                                    ][index]
                                )}>
                                {valueRefer}
                            </option>
                        )
                    )}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default ValueReference;
