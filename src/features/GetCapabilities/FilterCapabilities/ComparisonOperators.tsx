import { Table } from "reactstrap";

import { useAppContext } from "../../../context";
import TotalItems from "../../../components/TotalItems";
import { getCompOperList } from "../../../utils";
import consts from "./constants";

export default function ComparisonOperators() {
  const { state } = useAppContext();
  const { getCapResp } = state;
  const compOperList = getCompOperList(getCapResp);
  const compOperLength = compOperList.length;

  const table = (
    <>
      <Table responsive className="table-striped text-center table-borderless">
        <tbody>
          {compOperList.map((compOper, index) => (
            <tr key={`comparison-operators-${index}`}>
              <td>{compOper}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <TotalItems numberOfItems={compOperLength} />
    </>
  );

  if (compOperLength) return table;
  if (getCapResp && !compOperLength) return <b>{consts.noCompOperMsg}</b>;
  return null;
}
