// Code for student grade generator
function gradeGenerator(){
    const prompt = require("prompt-sync")();
    let average = prompt("Enter Average: ") //Asks the user to input average score
    let grade; // declares grade
    
    if (average<=100 && average>=79){ // beginning of if...else statement
    grade = "A";
    }else if (average<=79 && average>=60){
    grade = "B";
    }else if (average<=59 && average>=49){
    grade = "C";
    }else if (average<=49 && average>=40){
    grade = "D";
    }else if (average<=40 && average>=0){
    grade = "E";
    }else if(average >100 || average < 0 ){ // incase a value outside the range is given as input
    grade = "Invalid Input";
    }
    console.log(grade);
    }
    gradeGenerator()