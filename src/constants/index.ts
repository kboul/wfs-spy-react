import tags from "./tags";

export * from "./colors";

export default Object.freeze({
  noOperation: "This WFS service does not provide ",
  noOption: "---",
  proccessMessage: "processing request...",
  requests: ["GetCapabilities", "DescribeFeatureType", "GetPropertyValue"],
  tags,
  versions: ["2.0.0", "2.0.2"]
});
