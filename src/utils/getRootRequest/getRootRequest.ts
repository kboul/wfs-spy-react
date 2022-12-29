export default function getRootRequest(
  url: string,
  version: string,
  request: string,
  service: string
): string {
  return `${url.trim()}?\nversion=${version}&\nrequest=${request}&\nservice=${service}`;
}
