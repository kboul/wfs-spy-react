import { ServiceId } from "./models";
import globalConsts from "../constants";
import parseXML from "./parseXML";

const { tags } = globalConsts;

const extractTitle = (getCapResp: XMLDocument): string => {
  if (!getCapResp) return "";

  const titleTag = getCapResp.querySelector(tags.title);
  const titleTags = getCapResp.querySelectorAll(tags.title);
  let title: string = "";

  if (titleTag?.textContent) title = titleTag.textContent;
  else if (titleTags) {
    Array.from(titleTags).forEach((titleItem) => {
      if (titleItem.textContent) title = titleItem.textContent;
    });
  }

  return title;
};

const extractAbstract = (getCapResp: XMLDocument): string => {
  if (!getCapResp) return "";

  const abstractTag = getCapResp.querySelector(tags.abstract);
  const abstractTags = getCapResp.querySelectorAll(tags.abstract);
  let abstract: string = "";

  if (abstractTag?.textContent) abstract = abstractTag.textContent;
  else if (abstractTags) {
    Array.from(abstractTags).forEach((abstractItem) => {
      if (abstractItem.textContent) abstract = abstractItem.textContent;
    });
  }

  return abstract;
};

const extractKeywords = (getCapResp: XMLDocument): string[] => {
  if (!getCapResp) return [];

  const keywordsTag = getCapResp.querySelector(tags.keywords);
  const keywords: string[] = [];

  if (keywordsTag?.children) {
    Array.from(keywordsTag.children).forEach((keyword) => {
      if (keyword.textContent) keywords.push(keyword.textContent);
    });
  }

  return keywords;
};

export default function extractServiceId(xmlString: string): ServiceId {
  const getCapResp: XMLDocument = parseXML(xmlString);

  if (!getCapResp) return {};

  const title = extractTitle(getCapResp);
  const abstract = extractAbstract(getCapResp);
  const keywords = extractKeywords(getCapResp);

  const serviceTypeTag = getCapResp.querySelector(tags.serviceType);
  const serviceTypeVersionTag = getCapResp.querySelector(
    tags.serviceTypeVersion
  );
  const feesTag = getCapResp.querySelector(tags.fees);
  const accessConstraintsTag = getCapResp.querySelector(tags.accessConstraints);

  const empty = "-";

  return {
    [tags.title]: title || empty,
    [tags.abstract]: abstract || empty,
    [tags.keywords]: keywords.join(", ") || empty,
    [tags.serviceType]: serviceTypeTag?.textContent || empty,
    [tags.serviceTypeVersion]: serviceTypeVersionTag?.textContent || empty,
    [tags.fees]: feesTag?.textContent || empty,
    [tags.accessConstraints]: accessConstraintsTag?.textContent || empty
  };
}
