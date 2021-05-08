function getGrade(score) {
    let grade;
    // Write your code here
    if(score >= 0 && score <= 5) grade = "F"
    if(score >= 6 && score <= 10) grade = "E"
    if(score >= 11 && score <= 15) grade = "D"
    if(score >= 16 && score <= 20) grade = "C"
    if(score >= 21 && score <= 25) grade = "B"
    if(score >= 26 && score <= 30) grade = "A"
    return grade;
}