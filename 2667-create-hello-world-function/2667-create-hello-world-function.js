
var createHelloWorld = function() {
    
    // 1. createHelloWorld fonksiyonu çağrıldığında geriye yeni bir fonksiyon döner.
    // '...args' ifadesi, bu fonksiyona gelecek olan tüm parametreleri bir dizi olarak yakalar.
    return function(...args) {
        
        // 2. Bu içteki fonksiyon, içerisine ne yazılırsa yazılsın HER ZAMAN "Hello World" döner.
        return "Hello World";
        
    }; // İçteki fonksiyonun kapanış parantezi
    
}; // createHelloWorld fonksiyonunun kapanış parantezi