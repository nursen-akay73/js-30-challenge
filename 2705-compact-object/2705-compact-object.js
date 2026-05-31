var compactObject = function(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    
    // Dizi ise filtrele, nesne ise reduce ile temiz nesne inşa et
    if (Array.isArray(obj)) return obj.map(compactObject).filter(Boolean);
    
    return Object.keys(obj).reduce((acc, key) => {
        const value = compactObject(obj[key]);
        if (value) acc[key] = value;
        return acc;
    }, {});
};