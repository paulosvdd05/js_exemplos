const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
    
}
//imperativo
console.log('====================================');
console.log(total1/alunos.length);
console.log('====================================');
//declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log('====================================');
console.log(total2/alunos.length);
console.log('====================================');

