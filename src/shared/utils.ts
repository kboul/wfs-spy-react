const splitStrOnUpperCase = (strOnUpperCase: string): string =>
    strOnUpperCase.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

const selectedTypename = (typename: string): string => {
    return typename ? `${typename.split(':')[1]}Type` : '';
};

export { splitStrOnUpperCase, selectedTypename };
