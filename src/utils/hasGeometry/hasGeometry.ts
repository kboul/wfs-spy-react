export default function hasGeometry(valueReference: string): boolean {
  return valueReference.includes("the_geom") || valueReference.includes("gml");
}
