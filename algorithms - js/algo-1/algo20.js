// #20
// You are given an array of person objects, each with a name, age,
// and budget property. Implement four functions that calculate stats
// across the array.
//
// Constraints: the array may be empty — return 0 in that case.
// Budget and age values will always be positive numbers.
// Some objects may be missing a property — treat it as 0.
//
// Input:
// obj = {
// {ilan, 13, 100 },
// {ilan2 , , },
// {}
// }
const people = [
    { name: "Ilan", age: 13, budget: 100 },
    { name: "Dana", age: 20, budget: 250 },
    { name: "Noam", age: 30, budget: 400 },
    { name: "Roni", budget: 150 },
    { name: "Maya", age: 25 },
    {}
];

function totalBudget(people) {
    let totalBud = 0;
  
    people.forEach(e => {
        let budget = e.budget || 0;
        totalBud += budget;
    });
    return totalBud;
}

function averageAge(people) {
    if (people.length === 0) {
        return 0;
    }
    let totalAge =0;
    
    people.forEach(person => {
        let age = person.age || 0;
        totalAge += age;
    });

    return totalAge / people.length;
}


function oldestAge(people) {
    let oldest = 0;

    people.forEach(e => {
        let currentAge = e.age;
        oldest =  (currentAge >= oldest) ? currentAge : oldest;
    });
    return oldest;
}

function countPeopleWithBudget(people) {
    let count = 0;

    people.forEach(e => {
        let currentBudget = e.budget || 0;
        
        if (currentBudget > 0) {
            count++;
        }
    });
    return count;
}


console.log(totalBudget(people));            // 900
console.log(averageAge(people));             // 14.666666666666666
console.log(oldestAge(people));              // 30
console.log(countPeopleWithBudget(people));  // 4

console.log(totalBudget([]));                // 0
console.log(averageAge([]));                 // 0
console.log(oldestAge([]));                  // 0
console.log(countPeopleWithBudget([]));      // 0