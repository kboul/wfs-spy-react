import { Col, Form } from "reactstrap";

import SelectedTypValueRefer from "./SelectedTypValueRefer";
import ValueCount from "./ValueCount";
import MinValue from "./MinValue";
import MaxValue from "./MaxValue";
import NumericValue from "./NumericValue";
import NonNumericValue from "./NonNumericValue";
import FilteredValueCount from "./FilteredValueCount";
import AddSortByASC from "./AddSortByASC";
import CompOperDropDown from "./CompOperDropDown";
import LowerValue from "./LowerValue";
import UpperValue from "./UpperValue";
import WfsFilterRequest from "./WFSFilterRequest";
import WfsFilterResponse from "./WfsFilterResponse";
import { colors } from "../../../constants";
import sharedStyles from "../shared.module.sass";

const containerStyle = { backgroundColor: colors.lightGray };

const consts = { header: "Property Value Filter" };

export default function FilterWFS() {
  return (
    <Col md="6" style={containerStyle}>
      <h4 className={sharedStyles.header}>{consts.header}</h4>
      <Form>
        <SelectedTypValueRefer />
        <ValueCount />
        <MinValue />
        <MaxValue />
        <NumericValue />
        <NonNumericValue />
        <CompOperDropDown />
        <LowerValue />
        <UpperValue />
        <FilteredValueCount />
        <AddSortByASC />
        <WfsFilterRequest />
        <WfsFilterResponse />
      </Form>
    </Col>
  );
}
