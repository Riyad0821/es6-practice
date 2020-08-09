class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Rampur High School";
    }
}
const student1 = new Student(12, "Riyad");
const student2 = new Student(22, "Arman");
const student3 = new Student(34, "Sabbir");
console.log(student1, student2, student3);