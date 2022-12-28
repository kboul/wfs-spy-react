import isMethodGet from "../../features/WFSRequests/utils/isMethodGet";

export default function getOrPost(httpMethod: string): string {
  return isMethodGet(httpMethod) ? "get" : "post";
}
