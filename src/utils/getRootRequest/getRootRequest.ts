export default function getRootRequest(
  url: string,
  version: string,
  request: string,
  service: string
) {
  return `${url.trim()}?\nversion=${version}&\nrequest=${request}&\nservice=${service}`;
}
