import { Provider } from "./models";
import globalConsts from "../constants";
import parseXML from "./parseXML";

const { tags } = globalConsts;

const replaceOws = (expression: string): string => {
  if (!expression) return "";
  return expression.replace("ows:", "");
};

export default function extractProvider(xmlString: string): Provider {
  const getCapResp: XMLDocument = parseXML(xmlString);

  const providerNameTag = getCapResp.querySelector(tags.providerName);
  const serviceContactTag = getCapResp.querySelector(tags.serviceContact);
  const providerNames: string[] = [];
  const providerValues: string[] = [];

  if (providerNameTag?.textContent && serviceContactTag?.textContent) {
    if (!providerNameTag?.textContent && !serviceContactTag?.textContent)
      return { providerNames: [], providerValues: [] };

    const serviceProviderTag = getCapResp.querySelector(tags.serviceProvider);
    if (serviceProviderTag && serviceProviderTag.children) {
      Array.from(serviceProviderTag.children).forEach((servProvItem) => {
        const providerSite = servProvItem.getAttribute(tags.xLinkHRef);
        if (servProvItem) {
          if (servProvItem.textContent && !servProvItem.children.length) {
            providerNames.push(replaceOws(servProvItem.tagName));
            providerValues.push(servProvItem.textContent);
          } else if (!servProvItem.children.length && providerSite) {
            providerNames.push(replaceOws(servProvItem.tagName));
            providerValues.push(providerSite);
          }
        }
      });

      const serviceContactSubTag = getCapResp.querySelector(
        tags.serviceContact
      );
      if (serviceContactSubTag && serviceContactSubTag.children) {
        Array.from(serviceContactTag?.children).forEach((servContItem) => {
          const servContItemChildrenLength = servContItem.children.length;

          if (servContItem) {
            if (servContItem.textContent && !servContItemChildrenLength) {
              providerNames.push(replaceOws(servContItem.tagName));
              providerValues.push(servContItem.textContent);
            }
            if (servContItemChildrenLength) {
              Array.from(servContItem.children).forEach(
                (servContItem1stChildItem) => {
                  const onlineResource = servContItem1stChildItem.getAttribute(
                    tags.xLinkHRef
                  );
                  if (servContItem1stChildItem) {
                    if (
                      servContItem1stChildItem.textContent &&
                      !servContItem1stChildItem.children.length
                    ) {
                      providerNames.push(
                        replaceOws(servContItem1stChildItem.tagName)
                      );
                      providerValues.push(servContItem1stChildItem.textContent);
                    }
                    if (
                      !servContItem1stChildItem.children.length &&
                      onlineResource
                    ) {
                      providerNames.push(
                        replaceOws(servContItem1stChildItem.tagName)
                      );
                      providerValues.push(onlineResource);
                    }
                    if (servContItem1stChildItem.children.length) {
                      Array.from(servContItem1stChildItem.children).forEach(
                        (servContItem2ndChildItem) => {
                          if (
                            servContItem2ndChildItem &&
                            servContItem2ndChildItem.textContent
                          ) {
                            providerNames.push(
                              replaceOws(servContItem2ndChildItem.tagName)
                            );
                            providerValues.push(
                              servContItem2ndChildItem.textContent
                            );
                          }
                        }
                      );
                    }
                  }
                }
              );
            }
          }
        });
      }
    }
  }

  return {
    providerNames,
    providerValues
  };
}
