export * from "./colors";
export * from "./tags";

export default Object.freeze({
  noOperation: "This WFS service does not provide ",
  noOption: "---",
  proccessMessage: "processing request...",
  requests: ["GetCapabilities", "DescribeFeatureType", "GetPropertyValue"],
  versions: ["2.0.0", "2.0.2"]
});
