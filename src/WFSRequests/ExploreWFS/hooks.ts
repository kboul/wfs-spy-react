import {
    useState,
    ChangeEvent,
    FormEvent,
    useEffect,
    useRef,
    useContext
} from 'react';
import { IValues, IErrors } from './models';
import { Context } from '../../context';
import types from '../../context/types';
import { colors } from './constants';

const useForm = (
    initialState: IValues,
    callback: () => void,
    validate: (values: IValues) => Object
) => {
    const [values, setValues] = useState<IValues>(initialState);
    const [errors, setErrors] = useState<IErrors>({});
    const { dispatch } = useContext(Context);

    const onChange = (field: string, e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        switch (field) {
            case 'url':
                dispatch({ type: types.SET_URL, payload: value });
                break;
            case 'version':
                dispatch({ type: types.SET_VERSION, payload: value });
                break;
            case 'request':
                dispatch({ type: types.SET_REQUEST, payload: value });
                break;
            default:
        }
        setValues({ ...values, [e.target.name]: value });
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
    const [urlBackgroud, setUrlBackground] = useState(colors.lightPurple);

    useEffect(() => urlRef.current.focus(), []);

    const onFocus = () => {
        urlRef.current.focus();
        setUrlBackground(colors.lightPurple);
    };

    const onBlur = () => {
        urlRef.current.blur();
        setUrlBackground(colors.white);
    };

    return [{ urlRef, urlBackgroud }, onFocus, onBlur];
};

export { useForm, useInputFocus };
