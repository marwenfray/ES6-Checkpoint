const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];
//using foreach instead of for
const getAge = (pet) => new Date().getFullYear() - pet.bornOn;
let petsWithAge = pets;
petsWithAge.forEach(pet => {
  pet.age = getAge(pet);
});
console.log(petsWithAge);
//filter function
let dogs = pets.filter((pet)=>{ return pet.type==="dog"
})
console.log(dogs);
//find function
let jasper = pets.find((pet)=> { return pet.name==="Jasper"   
})

console.log(`Jasper is ${jasper.age}  years old`);