// Nesne veya diziyi yazıya çevirip direkt boş halleriyle kıyaslar.
const isEmpty = (obj) => JSON.stringify(obj) === '{}' || JSON.stringify(obj) === '[]';