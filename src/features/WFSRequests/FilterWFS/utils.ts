/* eslint-disable prefer-template */
import { State } from '../../../context/models';
import getRootRequest from '../../../shared/utils/getRootRequest';

const formWfsFilterRequest = (state: State): string => {
    const {
        url,
        version,
        request,
        service,
        typename,
        valueReference,
        nonNumericValue,
        numericValue,
        compOper,
        lowerValue,
        upperValue,
        addSortBy,
        showNonNumericValue
    } = state;

    let filterRequest = `${getRootRequest(
        url,
        version,
        request,
        service
    )}\n&typeNames=${typename}&\nvalueReference=${valueReference}&\n`;

    const filterInput = showNonNumericValue ? nonNumericValue : numericValue;

    const addSortByExpr =
        addSortBy === 'yes' ? `&\nsortBy=${valueReference}+ASC` : '';

    switch (compOper) {
        case 'PropertyIsEqualTo':
        case 'PropertyIsNotEqualTo':
        case 'PropertyIsLessThan':
        case 'PropertyIsGreaterThan':
        case 'PropertyIsLessThanOrEqualTo':
        case 'PropertyIsGreaterThanOrEqualTo':
            filterRequest +=
                'Filter=<Filter>\n' +
                '<' +
                compOper +
                '>\n' +
                '<PropertyName>' +
                valueReference +
                '</PropertyName>\n' +
                '<Literal>' +
                filterInput +
                '</Literal>\n' +
                '</' +
                compOper +
                '>\n' +
                '</Filter>' +
                addSortByExpr;
            break;
        case 'PropertyIsLike':
            filterRequest +=
                "<PropertyIsLike wildCard='*' singleChar='.' escapeChar='!'>\n" +
                '<PropertyName>' +
                valueReference +
                '</PropertyName>\n' +
                '<Literal>' +
                filterInput +
                '</Literal>\n' +
                '</PropertyIsLike>\n</Filter>' +
                addSortByExpr;
            break;
        case 'PropertyIsNull':
            filterRequest +=
                '<PropertyIsNull>\n' +
                ' <ValueReference>' +
                valueReference +
                '</ValueReference>\n' +
                '</PropertyIsNull>\n' +
                '</Filter>';
            break;
        case 'PropertyIsNil':
            filterRequest +=
                '<PropertyIsNil>\n' +
                ' <PropertyName>' +
                valueReference +
                '</PropertyName>\n' +
                '</PropertyIsNil>\n' +
                '</Filter>';
            break;
        case 'PropertyIsBetween':
            filterRequest +=
                '<PropertyIsBetween>\n <PropertyName>' +
                valueReference +
                '</PropertyName>\n' +
                ' <LowerBoundary>\n' +
                ' <Literal>' +
                lowerValue +
                '</Literal>\n' +
                ' </LowerBoundary>\n' +
                ' <UpperBoundary>\n' +
                ' <Literal>' +
                upperValue +
                '</Literal>\n ' +
                ' </UpperBoundary>\n' +
                '</PropertyIsBetween>\n' +
                '</Filter>' +
                addSortByExpr;
            break;
        default:
            filterRequest += '';
    }

    return filterRequest;
};

export { formWfsFilterRequest };
