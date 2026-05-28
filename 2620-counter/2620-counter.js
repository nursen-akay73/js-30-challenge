/**
 * @param {number} n - Başlangıç sayısı
 * @return {Function} counter - Her çağrıldığında artan fonksiyon
 */
var createCounter = function(n) {
    
    // createCounter fonksiyonu geriye her çağrıldığında tetiklenecek yeni bir fonksiyon döner.
    return function() {
        
        // Post-increment (n++) kullanarak önce n'in mevcut değerini döndürüyoruz,
        // döndürme işlemi biter bitmez n'in değerini hafızada 1 artırıyoruz.
        return n++;
        
    }; // İçteki fonksiyonun bitişi
}; // createCounter fonksiyonunun bitişi

/** 
 * Kullanım Örneği:
 * const counter = createCounter(10)
 * counter() // 10 döner
 * counter() // 11 döner
 * counter() // 12 döner
 */