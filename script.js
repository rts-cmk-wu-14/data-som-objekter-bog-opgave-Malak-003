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
