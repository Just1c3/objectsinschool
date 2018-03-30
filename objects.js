var id = 1;

function Student(firstName,lastName,studentGrade){
    this.firstName= firstName;
    this.lastName= lastName;
    this.studentGrade= studentGrade;
    this.section= [];
    this.id = id++;
}
function Teacher(firstName,lastName,teacherSubject){
    this.firstName= firstName;
    this.lastName= lastName;
    this.teacherSubject= teacherSubject;
    this.id = id++;
}
function Section(sectionName, sectionCount){
    this.sectionName = sectionName;
    this.sectionCount= sectionCount;
    this.students= [];
    this.teachers= [];
    this.addStudentToSection = function(student){
      this.students.push(student);
      console.log(this.students);
      this.sectionCount++;
    };
    this.addTeacherToSection = function(teacher){
        this.teachers.push(teacher);
        console.log(this.teachers);
    };
    this.id = id++;
}








