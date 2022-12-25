export default function getFullTypename(typename: string): string {
  return typename ? `${typename.split(":")[1]}Type` : "";
}
