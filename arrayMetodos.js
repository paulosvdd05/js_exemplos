const pilotos = ['Vetel', 'Alonso', 'Raikonen', 'Massa']
pilotos.pop()//remove o ultimo
console.log(pilotos);

pilotos.push('Verstappen')//adiciona ao ultimo
console.log(pilotos);

pilotos.shift()//remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton')//adiciona ao primeiro[0]
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

pilotos.splice(3,1)//removeu massa
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2)//novo array a partir do 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4)//novo array a partir do 1 ate o 4 sem incluir o 4
console.log(algunsPilotos2);

