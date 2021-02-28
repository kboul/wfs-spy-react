export default function getFullTypename(typename: string): string {
    console.log(typename);
    return typename ? `${typename.split(':')[1]}Type` : '';
}
