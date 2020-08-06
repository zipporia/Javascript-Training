// Es5
// constructor function 
// function Person(fname, lname, age, dob){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.dob = new Date(dob);
// }
// prototype
// Person.prototype.getFullName = function(){
//     return `${this.fname} ${this.lname}`;
// }

// Class Es6
class Person{
    constructor(fname, lname, age, dob){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.dob = new Date(dob);
    }

    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

// Instantiate object
const p1 = new Person("mark", "corn", 33, '8-6-2020');

console.log(p1);