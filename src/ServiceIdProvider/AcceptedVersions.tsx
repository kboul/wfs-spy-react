import React, { FC } from 'react';
import { IAcceptedVersions } from './model';

const AcceptedVersions: FC<IAcceptedVersions> = ({ versions }) => (
    <>
        {versions.map((version: string, versionIndex: number) => (
            <span key={versionIndex}>
                {versionIndex === 0 && 'The selected WFS supports versions '}
                <b>
                    {version}
                    {versionIndex !== versions.length - 1 ? ', ' : ''}
                </b>
                {versionIndex === versions.length - 1 && '.'}
            </span>
        ))}
    </>
);

export default AcceptedVersions;
