/**
 * @param {Function} fn - Debounce edilecek asıl fonksiyon
 * @param {number} t - Hareketsizlik bekleme süresi (milisaniye)
 * @return {Function} - Debounce edilmiş yeni fonksiyon
 */
var debounce = function(fn, t) {
    
    // Aktif zamanlayıcının kimliğini hafızada tutacak değişken
    let timerId;
    
    return function(...args) {
        
        // 1. Eğer halihazırda bekleyen bir zamanlayıcı varsa onu havada İPTAL ediyoruz.
        // Bu sayede kullanıcı hızlı hızlı tetikledikçe eski çağrılar sürekli sıfırlanır.
        clearTimeout(timerId);
        
        // 2. Yeni ve temiz bir zamanlayıcı başlatıyoruz.
        // Eğer 't' süresi boyunca bu fonksiyon tekrar çağrılmazsa asıl fonksiyon (fn) tetiklenir.
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
        
    };
};