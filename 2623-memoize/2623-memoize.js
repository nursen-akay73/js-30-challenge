
/**
 * @param {Function} fn - Önbelleğe alınacak asıl fonksiyon (sum, fib veya factorial)
 * @return {Function} - Önbellek mekanizmasına sahip yeni fonksiyon
 */
function memoize(fn) {
    // Sonuçları saklayacağımız boş hafıza objesi (cache)
    const cache = {};
    
    return function(...args) {
        // 1. Gelen parametre dizisini eşsiz bir string anahtara çeviriyoruz (Örn: "[2,2]")
        const key = JSON.stringify(args);
        
        // 2. Eğer bu anahtar hafızada yoksa, fonksiyonu çalıştırıp sonucu hafızaya kaydediyoruz
        if (!(key in cache)) {
            cache[key] = fn(...args);
        }
        
        // 3. Hafızadaki (hazır veya yeni eklenmiş) sonucu döndürüyoruz
        return cache[key];
    }
}

/** * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 * return a + b;
 * })
 * memoizedFn(2, 2) // 4 döner. fn çalıştı.
 * memoizedFn(2, 2) // 4 döner. fn çalışmadı, hafızadan geldi.
 * console.log(callCount) // 1
 */