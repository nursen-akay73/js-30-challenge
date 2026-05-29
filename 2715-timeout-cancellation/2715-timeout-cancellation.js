const cancellable = (fn, args, t) => {
    const id = setTimeout(() => fn(...args), t);
    return () => clearTimeout(id);
};
//JavaScript'te bir setTimeout oluşturduğumuzda, bu fonksiyon bize arka planda o zamanlayıcıya ait benzersiz bir kimlik numarası (Timeout ID) döndürür:

/*JavaScript
const timerId = setTimeout(fonksiyon, süre);
Eğer elimizde bu timerId varsa, tarayıcının veya Node.js'in yerleşik clearTimeout(timerId) fonksiyonunu kullanarak o zamanlayıcıyı daha süresi dolmadan havada yakalayıp yok edebiliriz. İşte bizim iptal fonksiyonumuzun yapacağı tek iş bu clearTimeout işlemini tetiklemek olacak!*/