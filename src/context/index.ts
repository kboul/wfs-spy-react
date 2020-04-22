import { createContext } from 'react';
import { IState } from './models';
import initialState from './initialState';

export default createContext<IState | any>(initialState);
