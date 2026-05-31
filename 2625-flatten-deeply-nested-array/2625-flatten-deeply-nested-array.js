/**
 * @param {Array} arr - İç içe geçmiş orijinal dizi
 * @param {number} n - Maksimum açılma/düzleştirme derinliği
 * @return {Array} - Düzleştirilmiş yeni dizi
 */
var flat = function (arr, n) {
    // 1. Sonuçları biriktireceğimiz boş dizi
    const result = [];

    // 2. İç içe yapıları derinliği takip ederek gezecek yardımcı özyinelemeli fonksiyon
    function helper(currentArray, depth) {
        // Gönderilen dizinin içindeki her bir elemanı sırayla dönüyoruz
        for (const item of currentArray) {
            
            // KURAL: Eğer eleman bir DİZİ ise VE o anki derinliğimiz 'n' sınırından KÜÇÜKSE
            if (Array.isArray(item) && depth < n) {
                // Bu alt dizinin içine giriyoruz ve derinliği 1 artırıyoruz (Özyineleme)
                helper(item, depth + 1);
            } else {
                // Eğer eleman düz bir sayıysa VEYA derinlik sınırına (n) ulaştıysak
                // Elemanı (veya açılma hakkı bitmiş alt diziyi) direkt sonuç dizisine ekliyoruz
                result.push(item);
            }
            
        }
    }

    // 3. Yardımcı fonksiyonu orijinal dizimizle ve 0. derinlikten başlatıyoruz.
    helper(arr, 0);

    // 4. Tamamen işlenmiş düz diziyi döndürüyoruz.
    return result;
};