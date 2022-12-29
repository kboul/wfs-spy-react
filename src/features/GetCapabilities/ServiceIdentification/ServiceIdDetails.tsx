import { Table } from "reactstrap";

import { useAppContext } from "../../../context";
import { TotalItems } from "../../../components";
import { extractServiceId } from "../../../wfsMetadata";
import { splitStrOnUpperCase } from "../../../utils";
import consts from "./constants";

export default function ServiceIdDetails() {
  const { state } = useAppContext();
  const { getCapResp } = state;
  const serviceId = extractServiceId(getCapResp);
  const serviceIdLength = Object.keys(serviceId).length;

  const table = (
    <>
      <Table responsive className="table-striped text-center table-borderless">
        <tbody>
          {Object.entries(serviceId).map(
            ([serviceName, serviceValue], index) => (
              <tr key={`service-details-${index}`}>
                <th>{splitStrOnUpperCase(serviceName)}</th>
                <td>{serviceValue}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <TotalItems numberOfItems={serviceIdLength} />
    </>
  );

  if (getCapResp && serviceIdLength) return table;
  if (getCapResp && !serviceIdLength) return <b>{consts.noServiceIdMsg}</b>;
  return null;
}
