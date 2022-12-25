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
import sharedStyles from "../shared.module.sass";

const containerStyle = { backgroundColor: "rgb(224, 224, 224)" };

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
