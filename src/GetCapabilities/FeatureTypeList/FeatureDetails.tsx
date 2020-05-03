import React, { FC, useContext, useState } from 'react';
import { Table, UncontrolledTooltip } from 'reactstrap';
import Context from '../../context';
import TotalItems from '../../shared/TotalItems';
import TablePagination from '../../shared/TablePagination';
import { IFeatureDetails } from './models';
import { checkAbstractLength } from './utils';
import { tags } from '../../shared/constants';
import consts from './constants';

const FeatureDetails: FC<IFeatureDetails> = ({ features }) => {
    const { state } = useContext(Context);
    const featuresLength = features.names.length;

    const pageSize = 10;
    const pagesCount = Math.ceil(features.names.length / pageSize);
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
                        <th>{tags.defaultCRS}</th>
                        <th>{tags.lowerCorner}</th>
                        <th>{tags.upperCorner}</th>
                    </tr>
                </thead>
                <tbody>
                    {features.titles
                        .slice(
                            currentPage * pageSize,
                            (currentPage + 1) * pageSize
                        )
                        .map((title, titleIndex) => {
                            const {
                                names,
                                abstracts,
                                defaultCRS,
                                lowerCorner,
                                upperCorner
                            } = features;
                            const abstract = abstracts[titleIndex];
                            return (
                                <tr key={titleIndex}>
                                    <td>{title}</td>
                                    <td>{names[titleIndex]}</td>
                                    <td>
                                        <span id={`tooltip-${titleIndex + 1}`}>
                                            {checkAbstractLength(abstract)}
                                        </span>
                                    </td>
                                    {abstract && (
                                        <UncontrolledTooltip
                                            placement="right"
                                            target={`tooltip-${
                                                titleIndex + 1
                                            }`}>
                                            {abstract}
                                        </UncontrolledTooltip>
                                    )}
                                    <td>{defaultCRS[titleIndex]}</td>
                                    <td>{lowerCorner[titleIndex]}</td>
                                    <td>{upperCorner[titleIndex]}</td>
                                </tr>
                            );
                        })}
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
    ) : state.getCapResponse && !featuresLength ? (
        <b>{consts.noFeatures}</b>
    ) : null;
};

export default FeatureDetails;
