 /**
 * @param {Function} fn - Sadece bir kez çalıştırılmak istenen asıl fonksiyon
 * @return {Function} - Koruyucu yeni fonksiyon
 */
var once = function(fn) {
    
    // Fonksiyonun daha önce çalışıp çalışmadığını hafızada tutan bir bayrak değişkeni.
    let hasBeenCalled = false;
    
    return function(...args) {
        
        // 1. Eğer fonksiyon daha önce ÇALIŞMADIYSA (hasBeenCalled false ise)
        if (!hasBeenCalled) {
            
            // Bayrağı hemen true yapıyoruz ki bir sonraki gelişinde buraya giremesin.
            hasBeenCalled = true;
            
            // Asıl fonksiyonu gelen parametrelerle (...args) tetikliyor ve sonucunu döndürüyoruz.
            return fn(...args);
        }
        
        // 2. Eğer fonksiyon daha önce zaten ÇALIŞTIYSA (hasBeenCalled true ise)
        // JavaScript'te boş return yazarsan geriye otomatik olarak 'undefined' döner.
        return undefined;
        
    };
};

/**
 * Kullanım Örneği:
 * let fn = (a,b,c) => (a + b + c);
 * let onceFn = once(fn);
 *
 * onceFn(1,2,3); // 6 döner
 * onceFn(2,3,6); // undefined döner, asıl fonksiyon tetiklenmez!
 */