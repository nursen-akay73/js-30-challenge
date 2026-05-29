/**
 * @param {number[]} arr - Dönüştürülecek orijinal dizi
 * @param {Function} fn - Her elemana uygulanacak dönüştürme fonksiyonu
 * @return {number[]} - Dönüştürülmüş elemanlardan oluşan yeni dizi
 */
var map = function(arr, fn) {
    
    // 1. Sonuçları toplayacağımız yeni ve boş bir dizi oluşturuyoruz.
    const transformedArray = [];
    
    // 2. Orijinal dizinin üzerinde klasik bir for döngüsü ile dönüyoruz.
    for (let i = 0; i < arr.length; i++) {
        
        // 3. i. indeksteki elemanı ve indeksin kendisini fn fonksiyonuna gönderiyoruz.
        // Çıkan sonucu yeni dizimizin sonuna .push() ile ekliyoruz.
        transformedArray.push(fn(arr[i], i));
        
    }
    
    // 4. Dönüşüm tamamlandığında yeni diziyi geriye döndürüyoruz.
    return transformedArray;
};