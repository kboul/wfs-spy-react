import React, { FC, useContext } from 'react';
import Context from '../../context';

import { IContext } from '../../context/models';
import { extractAcceptVersions, parseXML } from '../../shared/wfsMetadata';
import consts from './constants';

const AcceptVersions: FC = () => {
    const { state }: IContext = useContext(Context);
    const { getCapResp } = state;
    const parsedResponse = parseXML(getCapResp);
    const acceptVersions = extractAcceptVersions(parsedResponse);
    const versionsLength = acceptVersions.length;
    const lastVersion = versionsLength - 1;

    const output = (
        <>
            {acceptVersions.map((version, index) => (
                <span key={`accept-versions-${index}`}>
                    {index === 0 && consts.acceptVersionsStr}
                    <b>
                        {version}
                        {index !== lastVersion ? ', ' : ''}
                    </b>
                    {index === lastVersion && '.'}
                </span>
            ))}
        </>
    );

    if (versionsLength) return output;
    if (getCapResp && !versionsLength) return <b>{consts.noAcceptVersions}</b>;
    return null;
};

export default AcceptVersions;
