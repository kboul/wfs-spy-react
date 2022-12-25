import { useAppContext } from "../../../context";
import { extractAcceptVersions } from "../../../wfsMetadata";
import consts from "./constants";

export default function AcceptVersions() {
  const { state } = useAppContext();
  const { getCapResp } = state;
  const acceptVersions = extractAcceptVersions(getCapResp);
  const versionsLength = acceptVersions.length;
  const lastVersion = versionsLength - 1;

  const output = (
    <>
      {acceptVersions.map((version, index) => (
        <span key={`accept-versions-${index}`}>
          {index === 0 && consts.supportsMsg}
          <b>
            {version}
            {index !== lastVersion ? ", " : ""}
          </b>
          {index === lastVersion && "."}
        </span>
      ))}
    </>
  );

  if (versionsLength) return output;
  if (getCapResp && !versionsLength) return <b>{consts.noAcceptVersionsMsg}</b>;
  return null;
}
