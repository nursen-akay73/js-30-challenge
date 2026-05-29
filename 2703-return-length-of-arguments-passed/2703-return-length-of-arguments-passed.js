/**
 * @param {...(null|boolean|number|string|Array|Object)} args - Fonksiyona gelen tüm rastgele parametreler
 * @return {number} - Gelen parametrelerin toplam sayısı
 */
var argumentsLength = function(...args) {
    
    // '...args' ifadesi gelen tüm parametreleri bir diziye dönüştürür.
    // .length özelliği ise bu dizide kaç eleman olduğunu bize doğrudan verir.
    return args.length;
    
};

/**
 * Kullanım Örneği:
 * argumentsLength(1, 2, 3); // 3 döner
 */