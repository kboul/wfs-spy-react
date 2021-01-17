import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

const formStyle = { opacity: 0 };

interface HiddenFieldProps {
    condition: string | boolean;
    displayTimes: number;
}

export default function HiddenField({
    condition,
    displayTimes
}: HiddenFieldProps) {
    if (condition)
        return (
            <>
                {[...Array(displayTimes)].map((e: Event, i: number) => (
                    <FormGroup key={i} row style={formStyle}>
                        <Label for="hiddenField" md={2} />
                        <Col md={9}>
                            <Input type="text" />
                        </Col>
                    </FormGroup>
                ))}
            </>
        );
    return null;
}
