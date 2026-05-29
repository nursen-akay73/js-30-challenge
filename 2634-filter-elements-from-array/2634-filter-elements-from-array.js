/**
 * @param {number[]} arr - Filtrelenecek orijinal dizi
 * @param {Function} fn - Filtre şartını içeren fonksiyon
 * @return {number[]} - Şartı sağlayan elemanlardan oluşan yeni dizi
 */
var filter = function(arr, fn) {
    
    // 1. Şartı sağlayan elemanları toplayacağımız yeni ve boş bir dizi oluşturuyoruz.
    const filteredArr = [];
    
    // 2. Orijinal dizinin üzerinde klasik bir for döngüsü ile dönüyoruz.
    for (let i = 0; i < arr.length; i++) {
        
        // 3. Elemanı ve indeksini fn fonksiyonuna gönderiyoruz.
        // if şartının içi, dönen sonucun "truthy" (doğru kabul edilen) olup olmadığını otomatik kontrol eder.
        if (fn(arr[i], i)) {
            
            // 4. Eğer şart sağlanıyorsa, o anki elemanı (arr[i]) filtrelenmiş diziye ekliyoruz.
            filteredArr.push(arr[i]);
            
        }
    }
    
    // 5. Döngü bittiğinde filtrelenmiş yeni diziyi geriye döndürüyoruz.
    return filteredArr;
};