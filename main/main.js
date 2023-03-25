const employees = [
 { name: "David Carlson", age: 30 },
 { name: "John Cena", age: 34 },
 { name: "Mike Sheridan", age: 25 },
 { name: "John Carte", age: 50 }
];
let name=employees.find(function(person){
	return person.name.indexOf("John")>=0;
});
console.log(name);
 

let name1=employees.findIndex(function(person){
	return person.name.indexOf("John")>=0;
});
console.log(name1);
