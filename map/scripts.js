/*
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};



function mapComThis (array, thisArg) {
return array.map(function (item) {
   return item * this.value;
}, thisArg);
}

const nums = [1, 2];


console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));*/

//função sem this

/* function mapSemThis(array) {
   return array.map(function(item){
        return item*2
    });
}

const nums = [2,4,6,8,10];

console.log(mapSemThis(nums)); */

// (filtrara) numeros pares de um array.

/* function filtraPares(array) {
    return array.filter(callback)
}

function callback(item) {
    return item % 2 === 0
;}

const meuArray = [1 , 23, 55 ,67 , 30 ,2, 4];

console.log(filtraPares(meuArray)); */

// Reduce

/*function somaNumeros (array) {
    return array.reduce(function (prev, current){
        console.log(( prev ));
        console.log(( current ));
        return prev + current;
    }, 0);
}

const array = [1, 2];

console.log(somaNumeros(array)); */


//Reduce 2

const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    },
]

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {

        console.log (("rodada", index + 1));
        console.log ((prev));
        console.log ((current));
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));