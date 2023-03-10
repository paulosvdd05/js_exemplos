const quaseArray = {0: 'rafael', 1: 'ána', 2:'Bia'}
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toSrting', {
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);
const meuArray = ['Rafael', 'Ana', 'bia']
console.log(meuArray);