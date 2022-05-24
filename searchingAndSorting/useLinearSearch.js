const indexOf = require("./linearSearch");

const people = [
    {
        id: 1,
        first_name: "Monah",
        last_name: "Yarnall",
        age: 17,
    },
    {
        id: 2,
        first_name: "Daphne",
        last_name: "McGaugey",
        age: 81,
    },
    {
        id: 3,
        first_name: "Walker",
        last_name: "Bucknell",
        age: 81,
    },
];

function isMatch(element, index, array){
    return element.age === 17;
}

console.log(indexOf(isMatch, people));

