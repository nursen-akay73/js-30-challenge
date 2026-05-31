class EventEmitter {
    constructor() {
        // Tüm olayları ve onlara bağlı fonksiyon listelerini saklayacağımız hafıza objesi
        this.events = {};
    }

    /**
     * @param {string} eventName - Abone olunacak olayın adı
     * @param {Function} callback - Olay tetiklendiğinde çalışacak fonksiyon
     * @return {Object} - İçinde unsubscribe metodu barındıran obje
     */
    subscribe(eventName, callback) {
        // 1. Eğer bu olay adı daha önce hiç kaydedilmediyse, boş bir dizi oluşturuyoruz
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        
        // 2. Gelen fonksiyonu, o olayın aboneler listesine (dizisine) ekliyoruz
        this.events[eventName].push(callback);

        // 3. KURAL: Geriye aboneliği iptal edebilecek bir unsubscribe metodu dönüyoruz
        return {
            unsubscribe: () => {
                // filter() kullanarak, aboneler listesinden SADECE bu callback fonksiyonunu temizliyoruz
                this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
            }
        };
    }

    /**
     * @param {string} eventName - Tetiklenecek olayın adı
     * @param {Array} args - Fonksiyonlara gönderilecek parametreler dizisi
     * @return {Array} - Tüm fonksiyonların ürettiği sonuçların dizisi
     */
    emit(eventName, args = []) {
        // 1. Eğer bu olaya kayıtlı hiçbir abone yoksa kural gereği boş dizi döndürüyoruz
        if (!this.events[eventName] || this.events[eventName].length === 0) {
            return [];
        }
        
        // 2. Olayın tüm abonelerini map ile sırayla dönüp çalıştırıyoruz 
        // ve ürettikleri sonuçları bir dizi halinde geriye döndürüyoruz
        return this.events[eventName].map(callback => callback(...args));
    }
}

/**
 * Kullanım Örneği:
 * const emitter = new EventEmitter();
 * const sub = emitter.subscribe("onClick", (x) => x * 2);
 * emitter.emit("onClick", [5]); // [10] döner
 * sub.unsubscribe(); // Abonelik iptal edildi
 * emitter.emit("onClick", [5]); // [] döner
 */