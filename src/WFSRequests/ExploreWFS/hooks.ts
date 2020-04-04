import { useState, ChangeEvent, FormEvent } from 'react';
import { iValues } from './model';

const useForm = (
    callback: () => void,
    initialState: iValues,
    validate: (values: iValues) => Object
) => {
    const [values, setValues] = useState<iValues>(initialState || {});
    const [errors, setErrors] = useState<any>({});

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (Object.keys(validate(values)).length === 0) {
            callback();
            setErrors({});
        } else {
            setErrors(validate(values));
        }
    };

    return {
        values,
        onChange,
        onSubmit,
        errors,
    };
};

export default useForm;
