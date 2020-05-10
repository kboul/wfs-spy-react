const splitStrOnUpperCase = (strOnUpperCase: string) =>
    strOnUpperCase.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

export { splitStrOnUpperCase };
