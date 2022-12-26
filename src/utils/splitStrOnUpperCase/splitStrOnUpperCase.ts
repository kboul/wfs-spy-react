export default function splitStrOnUpperCase(strOnUpperCase: string): string {
  return strOnUpperCase.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}
