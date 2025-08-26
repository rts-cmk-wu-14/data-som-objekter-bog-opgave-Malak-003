// opgave 1

const person = {
  firstName: "Lena",
  lastName: "Hansen",
  age: 35,
  city: "Odense",
  pet: ["kat"]
}

console.log(person.city)
console.log(person.age)
console.log(person.pet)

console.log(person['city'])
console.log(person['pet'])



// Opgave 2 
const personT = {
  firstName: "Lena",
  lastName: "Hansen",
  married: true,
  age: 35,
  hobbies: ["music, painting, cooking"],
  city: "Odense",
  pet:{
    type:"kat",
    name:"luke"
  } 
}

personT.hobbies.forEach(function(hobby){
    console.log(hobby)
})

console.log(personT.pet.type)
console.log(personT.pet.name)




// Opgave 3
let students = [
    {name:"Sara", age:"18", course:"web"},
    {name:"Dan", age:"20", course:"Medie"},
    {name:"luke", age:"19", course:"teknisk"},
]

let studentsList = document.querySelector(".studentsL")
students.forEach(function(student){
    const studentDiv = document.createElement("div")
    studentDiv.textContent = 
    `${student.name} + , Alder: + ${student.age} + , Uddannelser: + ${student.course}`
    studentsList.appendChild(studentDiv)
})