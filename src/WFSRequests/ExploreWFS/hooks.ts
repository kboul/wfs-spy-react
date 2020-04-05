import { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { iValues, Errors } from './models';

const useForm = (
    initialState: iValues,
    callback: () => void,
    validate: (values: iValues) => Object
) => {
    const [values, setValues] = useState<iValues>(initialState);
    const [errors, setErrors] = useState<Errors>({});

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
        errors
    };
};

const useInputFocus = (): any => {
    const urlRef = useRef<any>(null);
    const [urlBackgroud, setUrlBackground] = useState('#eeeeff');

    useEffect(() => urlRef.current.focus(), []);

    const onFocus = () => {
        urlRef.current.focus();
        setUrlBackground('#eeeeff');
    };

    const onBlur = () => {
        urlRef.current.blur();
        setUrlBackground('#ffffff');
    };

    return [{ urlRef, urlBackgroud }, onFocus, onBlur];
};

export { useForm, useInputFocus };
