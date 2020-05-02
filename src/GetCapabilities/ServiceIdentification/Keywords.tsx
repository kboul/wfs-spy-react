import React, { FC, useContext } from 'react';
import Context from '../../context';
import { IKeywords } from './models';
import consts from './constants';

const Keywords: FC<IKeywords> = ({ keywords }) => {
    const { state } = useContext(Context);
    const lastKeyword = keywords.length - 1;
    return (
        <>
            {keywords.length ? (
                keywords.map((version: string, versionIndex: number) => (
                    <span key={versionIndex}>
                        {versionIndex === 0 && consts.keywordsStr}
                        <b>
                            {version}
                            {versionIndex !== lastKeyword ? ', ' : ''}
                        </b>
                        {versionIndex === lastKeyword && '.'}
                    </span>
                ))
            ) : state.getCapResponse && !keywords.length ? (
                <b>{consts.noKeywords}</b>
            ) : null}
        </>
    );
};

export default Keywords;
