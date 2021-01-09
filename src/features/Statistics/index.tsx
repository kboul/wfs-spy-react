import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Panel from '../../shared/Panel';
import { useAppContext } from '../../context';
import { chartOptions, getTotalRequestNumber } from './utils';
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

    const totalRequestNumber = getTotalRequestNumber(state);

    useEffect(() => {
        setRequestsOpts(prevState => {
            const options = { ...prevState };
            options.yAxis.max =
                totalRequestNumber >= 10 ? totalRequestNumber + 1 : 10;
            return options;
        });
    }, [totalRequestNumber]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setTimeOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapTime];
            series[1].data = [state.getDescFeatTypeTime];
            series[2].data = [state.getGetPropValTime];
            series[3].data = [state.getGetPropValFiltTime];
            return options;
        });
    }, [
        state.getCapResp,
        state.getGetCapTime,
        state.getDescFeatTypeTime,
        state.getGetPropValTime,
        state.getGetPropValFiltTime
    ]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setRequestsOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapNumber];
            series[1].data = [state.getDescFeatTypeNumber];
            series[2].data = [state.getGetPropValNumber];
            series[3].data = [state.getGetPropValFiltNumber];
            series[4].data = [totalRequestNumber];
            return options;
        });
    }, [
        state.getCapResp,
        state.descFeatTypeResp,
        state.getGetCapNumber,
        state.getDescFeatTypeNumber,
        state.getGetPropValNumber,
        state.getGetPropValFiltNumber,
        totalRequestNumber
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
