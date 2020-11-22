import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import Panel from '../../shared/Panel';
import { useAppContext } from '../../context';
import chartOptions from './utils';
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

    const totalRequestNumber =
        state.getGetCapNumber +
        state.getDescFeatTypeNumber +
        state.getGetPropValNumber;

    useEffect(() => {
        setRequestsOpts(prevState => {
            const options = { ...prevState };
            options.yAxis.max =
                totalRequestNumber >= 10 ? totalRequestNumber + 1 : 10;
            return options;
        });
    }, [
        state.getGetCapNumber,
        state.getDescFeatTypeNumber,
        state.getGetPropValNumber,
        totalRequestNumber
    ]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setTimeOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapTime];
            series[1].data = [state.getDescFeatTypeTime];
            series[2].data = [state.getGetPropValTime];
            return options;
        });
    }, [
        state.getCapResp,
        state.getGetCapTime,
        state.getDescFeatTypeTime,
        state.getGetPropValTime
    ]);

    useEffect(() => {
        if (!state.getCapResp) return;

        setRequestsOpts(prevState => {
            const options = { ...prevState };
            const series = [...options.series];
            series[0].data = [state.getGetCapNumber];
            series[1].data = [state.getDescFeatTypeNumber];
            series[2].data = [state.getGetPropValNumber];
            series[4].data = [totalRequestNumber];
            return options;
        });
    }, [
        state.getCapResp,
        state.descFeatTypeResp,
        state.getGetCapNumber,
        state.getDescFeatTypeNumber,
        state.getGetPropValNumber,
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
