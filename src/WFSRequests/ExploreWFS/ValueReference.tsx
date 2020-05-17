import React, { useContext, FC } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import Context from '../../context';
import { setValueReference } from '../../context/actions';
import { selectedTypename } from './utils';
import { consts } from './constants';
import sharedStyles from '../shared.module.sass';

const ValueReference: FC = () => {
    const { state, dispatch } = useContext(Context);
    const currentSelectedTypename = selectedTypename(state.typename);

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
                    onChange={e => dispatch(setValueReference(e.target.value))}>
                    {state.valueReferences?.names[currentSelectedTypename]?.map(
                        (valueRefer: string) => (
                            <option key={valueRefer}>{valueRefer}</option>
                        )
                    )}
                </Input>
            </Col>
        </FormGroup>
    );
};

export default ValueReference;
