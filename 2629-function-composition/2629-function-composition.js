var compose = function(functions) {
    // reduceRight, diziyi sağdan sola doğru gezer.
    // 'acc' biriken güncel sayı değeridir, 'fn' ise o adımdaki fonksiyondur.
    return x => functions.reduceRight((acc, fn) => fn(acc), x);
};