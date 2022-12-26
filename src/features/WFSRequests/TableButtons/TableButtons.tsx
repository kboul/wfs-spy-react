import { Table, Button } from "reactstrap";

import TableButtonsProps from "./model";
import { useAppContext } from "../../../context";
import disableRespBtns from "./utils";
import consts from "./constants";
import styles from "./TableButtons.module.sass";

export default function TableButtons({
  disabled,
  hasModal,
  label,
  onGetClick,
  onGetModalClick,
  onPostClick,
  onPostModalClick
}: TableButtonsProps) {
  const { state } = useAppContext();

  const { disableGetRespBtn, disablePostRespBtn } = disableRespBtns(
    state,
    label
  );

  return (
    <Table borderless className={styles.table}>
      <thead>
        <tr>
          <th>
            <Button
              color="primary"
              className="float-right"
              disabled={disabled || disableGetRespBtn}
              onClick={onGetClick}
              size="sm"
            >
              {consts.get} {label}
            </Button>
          </th>
          <th>
            <Button
              color="primary"
              className="float-left"
              disabled={disabled || disablePostRespBtn}
              onClick={onPostClick}
              size="sm"
            >
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
                className="float-right"
                color="primary"
                disabled={disabled || disableGetRespBtn}
                onClick={onGetModalClick}
                size="sm"
              >
                {consts.openInANewWindow}
              </Button>
            </td>
            <td>
              <Button
                className="float-left"
                color="primary"
                disabled={disabled || disablePostRespBtn}
                onClick={onPostModalClick}
                size="sm"
              >
                {consts.openInANewWindow}
              </Button>
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
}
