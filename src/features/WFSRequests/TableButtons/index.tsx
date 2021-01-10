import React from 'react';
import { Table, Button } from 'reactstrap';

import TableButtonsProps from './model';
import consts from './constants';
import styles from './index.module.sass';

export default function TableButtons({
    disabled,
    hasModal,
    label,
    onGetClick,
    onPostClick
}: TableButtonsProps) {
    return (
        <Table borderless className={styles.table}>
            <thead>
                <tr>
                    <th>
                        <Button
                            className="float-right"
                            color="primary"
                            disabled={disabled}
                            onClick={onGetClick}
                            size="sm">
                            {consts.get} {label}
                        </Button>
                    </th>
                    <th>
                        <Button
                            className="float-left"
                            color="primary"
                            disabled={disabled}
                            onClick={onPostClick}
                            size="sm">
                            {consts.post} {label}
                        </Button>
                    </th>
                </tr>
            </thead>
            {hasModal && (
                <tbody>
                    <tr>
                        <td>
                            <Button
                                color="primary"
                                className="float-right"
                                disabled={disabled}
                                size="sm">
                                {consts.openInANewWindow}
                            </Button>
                        </td>
                        <td>
                            <Button
                                color="primary"
                                className="float-left"
                                disabled={disabled}
                                size="sm">
                                {consts.openInANewWindow}
                            </Button>
                        </td>
                    </tr>
                </tbody>
            )}
        </Table>
    );
}
