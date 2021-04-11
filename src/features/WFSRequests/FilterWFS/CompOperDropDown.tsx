import { FormGroup, Label, Col, Input } from 'reactstrap';

import { useAppContext, changeState, types } from '../../../context';
import { getCompOperList } from '../../../utils';
import { isPropBetween } from '../utils';
import { ChangeEvent } from '../../../models/events';
import sharedStyles from '../shared.module.sass';

const consts = { compOper: 'Comparison oper.' };

export default function CompOperDropDown() {
    const { state, dispatch } = useAppContext();
    const compOperList = getCompOperList(state.getCapResp);

    const handleChange = (e: ChangeEvent) => {
        const compOper = e.target.value;
        dispatch(changeState(types.compOperChanged, { compOper }));
        if (isPropBetween(state.compOper))
            dispatch(changeState(types.numericNonNumericValuesReset, {}));
        else dispatch(changeState(types.lowerUpperValuesReset, {}));
    };

    return (
        <FormGroup row>
            <Label
                className={sharedStyles.labelFont}
                for="compOperDropDown"
                md={4}>
                {consts.compOper}
            </Label>
            <Col md={7}>
                <Input
                    disabled={!state.getPropValResp}
                    onChange={handleChange}
                    type="select"
                    value={state.compOper}>
                    {compOperList.map(compOper => (
                        <option key={compOper}>{compOper}</option>
                    ))}
                </Input>
            </Col>
        </FormGroup>
    );
}
