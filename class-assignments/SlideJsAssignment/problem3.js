function gradingSystem(){
    const examMarks={
    preExam:0,
    minExam:0,
    finalExam:0
}
let total=0;
for(let key in examMarks){
    examMarks[key]=prompt(`Enter the marks of ${key}`);
    total+=examMarks[key];
}
let grade;
if(examMarks['finalExam']>=90){
    grade="A+";
}
else if(total>=89 && total<=100){
    grade="A+";
}
if(grade=="A+"){
    return true;
}
else{
    return false;
}
}
let result=gradingSystem();
window.alert(result);
console.log(result);
