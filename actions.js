function list() {
    var index = document.getElementById("list").selectedIndex;
    var item = allItems[index];
    if (index == 0) {
        listStudents();
    }
    if (index == 1) {
        listTeachers();
    }
    if (index == 2) {
        listSubjects();
    }
}



function listStudents(){
    var html= "<table borders= '1'>";
    for(var i= 0; i<allStudents.length; i++){
        html+="<tr>";
        html+="<td>" + allStudents[i].firstName + "</td>";
        html+="<td>" + allStudents[i].lastName + "</td>";
        html+="<td>" + allStudents[i].studentGrade + "</td>";
        html+="</tr>"
    }
    html+= "</table>";
    document.getElementById("listOutput").innerHTML= html;
}
function listTeachers(){
    var html= "<table border= '1'>";
    for(var i= 0; i<allTeachers.length; i++){
        html+="<td>";
        html+="<td>" + allTeachers[i].firstName + "</td>";
        html+="<td>" + allTeachers[i].lastName + "</td>";
        html+="<td>" + allTeachers[i].teacherSubject + "</td>";
        html+="</tr>"
    }
    html+= "</table>";
    document.getElementById("listOutput").innerHTML= html;
}

function listSubjects(){
    var html= "<table border= '1'>";
    for(var i= 0; i<allSections.length; i++){
        html+="<td>";
        html+="<td>" + allSections[i].sectionName + "</td>";
        html+="<td>" + allSections[i].sectionCount + "</td>";
        html+="</tr>"
    }
    html+= "</table>";
    document.getElementById("listOutput").innerHTML= html;
}

function addStudent() {
    var studentFirstName= document.getElementById("studentFirstName").value;
    var studentLastName= document.getElementById("studentLastName").value;
    var studentGrade= document.getElementById("studentGrade").value;
    allStudents.push(new Student(studentFirstName, studentLastName, studentGrade));
    document.getElementById("getAdded").innerHTML = "Student Added"
}

function addTeacher(){
    var teacherFirstName= document.getElementById("teacherFirstName").value;
    var teacherLastName= document.getElementById("teacherLastName").value;
    var teacherSubject= document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(teacherFirstName, teacherLastName,teacherSubject));
    document.getElementById("getAdded").innerHTML = "Teacher Added"
}

function addSection(){
    var sectionSubject = document.getElementById("sectionSubject").value;
    var sectionCount = document.getElementById("sectionCount").value;
    allSections.push(new Section(sectionSubject, sectionCount));
    document.getElementById("getAdded").innerHTML = "Section Added"
}

function outputOptions(){
    for(var l= 0; l<allStudents.length; l++){
       document.getElementById("student").innerHTML += "<option value='" + allStudents[l].id +"'>" + allStudents[l].firstName + " " + allStudents[l].lastName + " "+ allStudents[l].studentGrade + "</option>";
    }
    for(var y=0; y<allTeachers.length; y++){
        document.getElementById("teacher").innerHTML+= "<option value='" + allTeachers[y].id +"'>" + allTeachers[y].firstName + " " + allTeachers[y].lastName + " " + allTeachers[y].teacherSubject + "</option>";
    }
    for(var s= 0; s<allSections.length; s++){
        document.getElementById("section").innerHTML+= "<option value='" + allSections[s].id +"'>" + allSections[s].sectionName + " " + allSections[s].sectionCount + "</option>";
        document.getElementById("section2").innerHTML+= "<option value='" + allSections[s].id +"'>" + allSections[s].sectionName + " " + allSections[s].sectionCount + "</option>";
    }
}

function addStudentsToSection(){
    var student = getStudentById(document.getElementById("student").value);
    var section = getSectionById(document.getElementById("section").value);
    section.addStudentToSection(student);
    document.getElementById("getAdded").innerHTML = "Student Added"
}

function addTeacherToSection(){
    var teacher = getTeacherById(document.getElementById("teacher").value);
    var section= getSectionById(document.getElementById("section2").value);
    section.addTeacherToSection(teacher);
    document.getElementById("getAdded").innerHTML = "Teacher Added"
}

function getStudentById(studentId){
    for(var i=0;i<allStudents.length;i++){
        if(allStudents[i].id== studentId){
            return allStudents[i];
        }
    }
}

function getTeacherById(teacherId){
    for(var i=0;i<allTeachers.length;i++){
        if(allTeachers[i].id== teacherId){
                return allTeachers[i];
        }
    }
}

function getSectionById(sectionId){
    for(var i=0; i<allSections.length;i++){
        if(allSections[i].id= sectionId){
            return allSections[i];
        }
    }
}


function sectionList(){
    var index = document.getElementById("sectionList").selectedIndex;
    var item = allItems[index];
    if (index == 0) {
        var html= "<table borders= '1'>";
        for(var i= 0; i<mathStudents.length; i++){
            html+="<tr>";
            html+="<td>" + mathStudents[i].firstName + "</td>";
            html+="<td>" + mathStudents[i].lastName + "</td>";
            html+="<td>" + mathStudents[i].studentGrade + "</td>";
            html+="</tr>"
        }
        html+= "</table>";
        document.getElementById("listedSections").innerHTML= html;
    }
    if (index == 1) {
        var html= "<table borders= '1'>";
        for(var i= 0; i<scienceStudents.length; i++){
            html+="<tr>";
            html+="<td>" + scienceStudents[i].firstName + "</td>";
            html+="<td>" + scienceStudents[i].lastName + "</td>";
            html+="<td>" + scienceStudents[i].studentGrade + "</td>";
            html+="</tr>"
        }
        html+= "</table>";
        document.getElementById("listedSections").innerHTML= html;
    }
    if (index == 2) {
        var html= "<table borders= '1'>";
        for(var i= 0; i<historyStudents.length; i++){
            html+="<tr>";
            html+="<td>" + historyStudents[i].firstName + "</td>";
            html+="<td>" + historyStudents[i].lastName + "</td>";
            html+="<td>" + historyStudents[i].studentGrade + "</td>";
            html+="</tr>"
        }
        html+= "</table>";
        document.getElementById("listedSections").innerHTML= html;
    }
    if (index == 3) {
        var html= "<table borders= '1'>";
        for(var i= 0; i<csStudents.length; i++){
            html+="<tr>";
            html+="<td>" + csStudents[i].firstName + "</td>";
            html+="<td>" + csStudents[i].lastName + "</td>";
            html+="<td>" + csStudents[i].studentGrade + "</td>";
            html+="</tr>"
        }
        html+= "</table>";
        document.getElementById("listedSections").innerHTML= html;
    }
    if (index == 4) {
        var html= "<table borders= '1'>";
        for(var i= 0; i<geographyStudents.length; i++){
            html+="<tr>";
            html+="<td>" + geographyStudents[i].firstName + "</td>";
            html+="<td>" + geographyStudents[i].lastName + "</td>";
            html+="<td>" + geographyStudents[i].studentGrade + "</td>";
            html+="</tr>"
        }
        html+= "</table>";
        document.getElementById("listedSections").innerHTML= html;
    }
}

