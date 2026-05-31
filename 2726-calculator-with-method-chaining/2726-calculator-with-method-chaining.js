class Calculator {
    
    /**
     * @param {number} value - Hesap makinesinin başlangıç değeri
     */
    constructor(value) {
        // Başlangıç değerini nesne içinde saklıyoruz
        this.result = value;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.result += value;
        return this; // Zincirin devam edebilmesi için nesnenin kendisini dönüyoruz
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.result -= value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        // KURAL: Eğer bölünen sayı 0 ise hata fırlatıyoruz
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    /** * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        // Math.pow veya modern ** operatörüyle üs alma işlemini gerçekleştiriyoruz
        this.result = this.result ** value;
        return this;
    }
    
    /** * @return {number} - Nihai sonucu döner, zinciri sonlandırır
     */
    getResult() {
        return this.result;
    }
}