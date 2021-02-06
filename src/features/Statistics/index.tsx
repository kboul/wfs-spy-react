import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Panel from '../../components/Panel';
import { useAppContext } from '../../context';
import {
    chartOptions,
    getTotalGetRequestNumber,
    getTotalPostRequestNumber,
    getMaxRequestNumber
} from './utils';
import ChartOptions from './models';
import consts from './constants';

export default function Statistics() {
    const { state } = useAppContext();
    const [timeOpts, setTimeOpts] = useState<ChartOptions>(
        chartOptions('time')
    );
    const [requestsOpts, setRequestsOpts] = useState<ChartOptions>(
        chartOptions('number')
    );

    const totalGetRequestNumber = getTotalGetRequestNumber(state);
    const totalPostRequestNumber = getTotalPostRequestNumber(state);
    const totalRequestNumber = totalGetRequestNumber + totalPostRequestNumber;
    const maxRequestNumber = getMaxRequestNumber(state);

    useEffect(() => {
        setRequestsOpts(prevState => {
            prevState.yAxis = {
                ...prevState.yAxis,
                max: maxRequestNumber >= 10 ? maxRequestNumber + 1 : 10
            };
            return prevState;
        });
    }, [totalRequestNumber]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setTimeOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapTime, state.postGetCapTime];
            series[1].data = [
                state.getDescFeatTypeTime,
                state.postDescFeatTypeTime
            ];
            series[2].data = [
                state.getGetPropValTime,
                state.postGetPropValTime
            ];
            series[3].data = [
                state.getGetPropValFiltTime,
                state.postGetPropValFiltTime
            ];
            return options;
        });
    }, [
        state.getGetCapTime,
        state.postGetCapTime,
        state.getDescFeatTypeTime,
        state.postDescFeatTypeTime,
        state.getGetPropValTime,
        state.postGetPropValTime,
        state.getGetPropValFiltTime,
        state.postGetPropValFiltTime
    ]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setRequestsOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapNumber, state.postGetCapNumber];
            series[1].data = [
                state.getDescFeatTypeNumber,
                state.postDescFeatTypeNumber
            ];
            series[2].data = [
                state.getGetPropValNumber,
                state.postGetPropValNumber
            ];
            series[3].data = [
                state.getGetPropValFiltNumber,
                state.postGetPropValFiltNumber
            ];
            series[4].data = [totalGetRequestNumber, totalPostRequestNumber];
            return options;
        });
    }, [
        state.getGetCapNumber,
        state.postGetCapNumber,
        state.getDescFeatTypeNumber,
        state.postDescFeatTypeNumber,
        state.getGetPropValNumber,
        state.postGetPropValNumber,
        state.getGetPropValFiltNumber,
        state.postGetPropValFiltNumber
    ]);

    return (
        <Col md={{ size: 8, offset: 2 }} className="mt-4">
            <h3>{consts.header}</h3>
            <p>{consts.descr}</p>

            <Panel
                content={
                    state.getCapResp && (
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={timeOpts}
                        />
                    )
                }
                header={consts.respTimeHeader}
                title={consts.respTimeDescr}
            />
            <Panel
                content={
                    state.getCapResp && (
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={requestsOpts}
                        />
                    )
                }
                header={consts.reqTimeHeader}
                title={consts.reqTimeDescr}
            />
        </Col>
    );
}
