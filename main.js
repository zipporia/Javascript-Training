// Array

// const number = [1, 2, 3, 5, 6];
// number[3] = "zipp";
// number.push("mark");
// number.unshift("this");
// number.pop();
// console.log(Array.isArray(2))
// console.log(number);


// Object literals

// const person = {
//     first: 'mark',
//     last: "corn",
//     age : 33,
//     Hobbies: ['chess', 'coding', 'Online Games'],
//     address: {
//         street: '30 main st.',
//         city: 'Iriga City',
//         country: 'Philippines',
//         houses:{
//             h1: 'boungalow',
//             h2: "two stories",
//         }
//     }
// }

// console.log(person)


// Arrays of objects
const names = [
    {
        id: 1,
        name: 'mark',
        authentic: true,
    },
    {
        id: 2,
        name: 'zipp',
        authentic: true,
    },
    {
        id: 3,
        name: 'boyet',
        authentic: false,
    }
];

for(let i = 0; i< names.length; i++){
    if (i == 2){
        console.log(names[i].name)
    }
    
}

