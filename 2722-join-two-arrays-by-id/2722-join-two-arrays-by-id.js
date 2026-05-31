/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    
    // 1. Id'lere göre nesneleri hızla eşleştireceğimiz boş bir hafıza objesi oluşturuyoruz.
    const resultMap = {};

    // 2. İlk dizideki tüm elemanları hafıza objemize yerleştiriyoruz.
    // Anahtar (key) olarak nesnenin id'sini kullanıyoruz.
    for (const obj of arr1) {
        resultMap[obj.id] = obj;
    }

    // 3. İkinci dizideki elemanları dönüyoruz.
    for (const obj of arr2) {
        if (resultMap[obj.id]) {
            // Eğer bu id hafızada zaten VARSA: İki nesneyi Spread (...) ile birleştiriyoruz.
            // Soru kuralı gereği: Sağ tarafa yazılan obj (arr2), sol taraftaki çakışan key'lerin üzerine yazar.
            resultMap[obj.id] = { ...resultMap[obj.id], ...obj };
        } else {
            // Eğer bu id hafızada YOKSA: Doğrudan yeni bir kayıt olarak ekliyoruz.
            resultMap[obj.id] = obj;
        }
    }

    // 4. Hafıza objemizdeki birleşmiş nesneleri Object.values ile düz bir diziye çıkarıyoruz.
    // Son olarak, kural gereği bu diziyi id değerlerine göre küçükten büyüğe sıralıyoruz.
    return Object.values(resultMap).sort((a, b) => a.id - b.id);
};