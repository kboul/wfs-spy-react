const hasGeometry = (valueRefer: string): boolean => {
    if (valueRefer.includes('the_geom') || valueRefer.includes('gml'))
        return true;
    return false;
};

export { hasGeometry };
