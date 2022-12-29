import isMethodGet from "../isMethodGet/isMethodGet";

export default function getOrPost(httpMethod: string): string {
  return isMethodGet(httpMethod) ? "get" : "post";
}
