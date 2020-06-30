import React, { FC, useContext, useState } from 'react';
import { Table, UncontrolledTooltip } from 'reactstrap';
import Context from '../../context';
import { IContext } from '../../context/models';
import TotalItems from '../../shared/TotalItems';
import TablePagination from '../../shared/TablePagination';
import { extractFeatureTypes, parseXML } from '../../shared/wfsMetadata';
import { checkAbstractLength } from './utils';
import { splitStrOnUpperCase } from '../../shared/utils';
import { tags } from '../../shared/constants';
import consts from './constants';

const FeatureDetails: FC = () => {
    const { state }: IContext = useContext(Context);
    const getCapResp = parseXML(state.getCapResp);
    const features = extractFeatureTypes(getCapResp);
    const featuresLength = features.length;

    const pageSize = 10;
    const pagesCount = Math.ceil(featuresLength / pageSize);
    const [currentPage, setCurrentPage] = useState(0);

    const onClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        setCurrentPage(index);
    };

    return featuresLength ? (
        <>
            <Table
                responsive
                className="table-striped text-center table-borderless">
                <thead>
                    <tr>
                        <th>{tags.title}</th>
                        <th>{tags.featureTypeName}</th>
                        <th>{tags.abstract}</th>
                        <th>{splitStrOnUpperCase(tags.defaultCRS)}</th>
                        <th>{splitStrOnUpperCase(tags.lowerCorner)}</th>
                        <th>{splitStrOnUpperCase(tags.upperCorner)}</th>
                    </tr>
                </thead>
                <tbody>
                    {features
                        .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                        .map(
                            (
                                {
                                    name,
                                    title,
                                    abstract,
                                    defaultCRS,
                                    lowerCorner,
                                    upperCorner
                                },
                                index
                            ) => {
                                return (
                                    <tr key={`feature-details-${index}`}>
                                        <td>{title}</td>
                                        <td>{name}</td>
                                        <td>
                                            <span id={`tooltip-${index + 1}`}>
                                                {abstract &&
                                                    checkAbstractLength(
                                                        abstract
                                                    )}
                                            </span>
                                        </td>
                                        {abstract && (
                                            <UncontrolledTooltip
                                                placement="right"
                                                target={`tooltip-${index + 1}`}>
                                                {abstract}
                                            </UncontrolledTooltip>
                                        )}
                                        <td>{defaultCRS}</td>
                                        <td>{lowerCorner}</td>
                                        <td>{upperCorner}</td>
                                    </tr>
                                );
                            }
                        )}
                </tbody>
            </Table>
            {featuresLength > 10 && (
                <TablePagination
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    onClick={onClick}
                />
            )}
            <TotalItems numberOfItems={featuresLength} />
        </>
    ) : state.getCapResp && !featuresLength ? (
        <b>{consts.noFeatures}</b>
    ) : null;
};

export default FeatureDetails;
