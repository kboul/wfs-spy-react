/* eslint-disable prefer-template */
import { State } from "../../../context/models";
import { getRootRequest } from "../../../utils";
import { concatPrefixesAndUris } from "../utils";

const formGetFilterRequest = (state: State): string => {
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

  let getFilterRequest = `${getRootRequest(
    url,
    version,
    request,
    service
  )}\n&typeNames=${typename}&\nvalueReference=${valueReference}&\n`;

  const filterInput = showNonNumericValue ? nonNumericValue : numericValue;

  const addSortByExpr =
    addSortBy === "yes" ? `&\nsortBy=${valueReference}+ASC` : "";

  switch (compOper) {
    case "PropertyIsEqualTo":
    case "PropertyIsNotEqualTo":
    case "PropertyIsLessThan":
    case "PropertyIsGreaterThan":
    case "PropertyIsLessThanOrEqualTo":
    case "PropertyIsGreaterThanOrEqualTo":
      getFilterRequest +=
        "Filter=<Filter>\n" +
        "<" +
        compOper +
        ">\n" +
        "<PropertyName>" +
        valueReference +
        "</PropertyName>\n" +
        "<Literal>" +
        filterInput +
        "</Literal>\n" +
        "</" +
        compOper +
        ">\n" +
        "</Filter>" +
        addSortByExpr;
      break;
    case "PropertyIsLike":
      getFilterRequest +=
        "Filter=<Filter>\n" +
        "<PropertyIsLike wildCard='*' singleChar='.' escapeChar='!'>\n" +
        "<PropertyName>" +
        valueReference +
        "</PropertyName>\n" +
        "<Literal>" +
        filterInput +
        "</Literal>\n" +
        "</PropertyIsLike>\n</Filter>" +
        addSortByExpr;
      break;
    case "PropertyIsNull":
      getFilterRequest +=
        "Filter=<Filter>\n" +
        "<PropertyIsNull>\n" +
        " <ValueReference>" +
        valueReference +
        "</ValueReference>\n" +
        "</PropertyIsNull>\n" +
        "</Filter>";
      break;
    case "PropertyIsNil":
      getFilterRequest +=
        "Filter=<Filter>\n" +
        "<PropertyIsNil>\n" +
        " <PropertyName>" +
        valueReference +
        "</PropertyName>\n" +
        "</PropertyIsNil>\n" +
        "</Filter>";
      break;
    case "PropertyIsBetween":
      getFilterRequest +=
        "Filter=<Filter>\n" +
        "<PropertyIsBetween>\n " +
        `<PropertyName>${valueReference}</PropertyName>\n` +
        " <LowerBoundary>\n" +
        ` <Literal>${lowerValue}</Literal>\n` +
        " </LowerBoundary>\n" +
        " <UpperBoundary>\n" +
        ` <Literal>${upperValue}</Literal>\n` +
        " </UpperBoundary>\n" +
        "</PropertyIsBetween>\n" +
        "</Filter>" +
        addSortByExpr;
      break;
    default:
      getFilterRequest += "";
  }

  return getFilterRequest;
};

const formPostFilterRequest = (state: State): string => {
  const prefixesAndUris = concatPrefixesAndUris(state.xmlNamespaces).join("\n");

  const filterInput = state.showNonNumericValue
    ? state.nonNumericValue
    : state.numericValue;

  const addSortByExpr =
    state.addSortBy === "yes"
      ? " <fes:SortBy>\n" +
        "  <fes:SortProperty>\n" +
        "    <fes:ValueReference>" +
        state.valueReference +
        "</fes:ValueReference>\n" +
        "    <fes:SortOrder>ASC</fes:SortOrder>\n" +
        "  </fes:SortProperty>\n" +
        " </fes:SortBy>\n" +
        "</wfs:Query>\n" +
        "</wfs:GetPropertyValue>"
      : "</wfs:Query>\n </wfs:GetPropertyValue>";

  let postFilterRequest =
    '<wfs:GetPropertyValue service="WFS" version="' +
    state.version +
    '" ' +
    prefixesAndUris +
    "\n" +
    'valueReference="' +
    state.valueReference +
    '">\n' +
    '<wfs:Query typeNames="' +
    state.typename +
    '">\n' +
    " <fes:Filter>\n";

  switch (state.compOper) {
    case "PropertyIsLessThan":
    case "PropertyIsLessThanOrEqualTo":
    case "PropertyIsGreaterThan":
    case "PropertyIsGreaterThanOrEqualTo":
    case "PropertyIsEqualTo":
    case "PropertyIsNotEqualTo":
      postFilterRequest +=
        `  <fes:${state.compOper}>\n` +
        `   <fes:ValueReference>${state.valueReference}</fes:ValueReference>\n` +
        `   <fes:Literal>${filterInput}</fes:Literal>\n` +
        `  </fes:${state.compOper}>\n` +
        " </fes:Filter>\n" +
        addSortByExpr;
      break;
    case "PropertyIsLike":
      postFilterRequest +=
        '  <fes:PropertyIsLike wildCard="*" singleChar="." escapeChar="!">\n' + // wildCard should be with CAPITAL C!
        "   <fes:ValueReference>" +
        state.valueReference +
        "</fes:ValueReference>\n" +
        "   <fes:Literal>" +
        filterInput +
        "</fes:Literal>\n" +
        "  </fes:PropertyIsLike>\n" +
        " </fes:Filter>\n" +
        addSortByExpr;
      break;
    case "PropertyIsNull":
      postFilterRequest +=
        "  <fes:PropertyIsNull>\n" +
        "   <fes:ValueReference>" +
        state.valueReference +
        "</fes:ValueReference>\n" +
        "  </fes:PropertyIsNull>\n" +
        " </fes:Filter>\n" +
        "</wfs:Query>\n" +
        "</wfs:GetPropertyValue>";
      break;
    case "PropertyIsNil":
      postFilterRequest +=
        "  <fes:PropertyIsNil>\n" +
        "   <fes:ValueReference>" +
        state.valueReference +
        "</fes:ValueReference>\n" +
        "  </fes:PropertyIsNil>\n" +
        " </fes:Filter>\n" +
        "</wfs:Query>\n" +
        "</wfs:GetPropertyValue>";
      break;
    case "PropertyIsBetween":
      postFilterRequest +=
        "  <fes:PropertyIsBetween>\n" +
        `   <fes:ValueReference>${state.valueReference}</fes:ValueReference>\n` +
        "   <fes:LowerBoundary>\n" +
        `    <fes:Literal>${state.lowerValue}</fes:Literal>\n` +
        "   </fes:LowerBoundary>\n" +
        "   <fes:UpperBoundary>\n" +
        `    <fes:Literal>${state.upperValue}</fes:Literal>\n` +
        "   </fes:UpperBoundary>\n" +
        "  </fes:PropertyIsBetween>\n" +
        " </fes:Filter>\n" +
        addSortByExpr;
      break;
    default:
  }

  return postFilterRequest;
};

export { formGetFilterRequest, formPostFilterRequest };
