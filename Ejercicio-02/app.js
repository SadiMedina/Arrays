/*EJERCICIO 02*/
const inventors = [{
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852,
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968,
    },

    {
        first: 'Caroline',
        last: 'Herschel',
        year: 1750,
        passed: 1848,
    },
    {
        first: 'Hanna',
        last: 'Hammastrom',
        year: 1829,
        passed: 1909,
    },
];

/*Uso de Array.Prototype.filter
FILTER: Nos permte obtener un subconjunto de los elementos del array*/
const deadBeforeSXX = inventors.filter(inventor => (inventor.passed < 1900));
console.log(deadBeforeSXX);

/*Uso de Array.Prototype.map
MAP: permite visitar cada uno de los elementos del array, recolectando en el proceso, 
un valor de retorno para cada elemento visitado */
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullName);

/*Años que vivio*/
const yearAlive = inventors.map(({first,last,passed,year})=> [`${first},${last}`, passed-year]);
console.log(yearAlive);

/*ARRAY.PROTOTYPE.SORT
Ordena el array in place.*/
let arr =[1,2,15];
arr.sort();
console.log(arr);

/*--------------------------------------------*/
 let ordered=inventors.sort((a,b)=>{
    if(a.year>b.year){
     return 1;
    }
    return -1;
});
console.log(ordered);

/*--------------------------------------------*/
const moreYearsAlive = inventors.sort((a, b) => {
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    return last > next ? -1 : 1;
});
console.log(moreYearsAlive);

/*----ARRAY.PROTOTYPE.REDUCE--------------*/
let initial = 0;
const value = arr.reduce((previousValue, item, index, array) => {
    /* aqui tu codigo */
}, initial);
