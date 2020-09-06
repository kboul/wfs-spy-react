const disableGeometry = (valueRefer: string): boolean => {
    return valueRefer ? valueRefer.includes('gml') : false;
};

export { disableGeometry };
