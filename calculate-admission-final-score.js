function calculateFinalScore(obj) {
    if (typeof obj === "object" && typeof obj.name === 'string' && typeof obj.testScore === 'number' && obj.testScore <= 50 && typeof obj.schoolGrade === 'number' && obj.schoolGrade <= 30 && typeof obj.isFFamily === 'boolean') {
        let finalScore = obj.testScore + obj.schoolGrade;
        if (obj.isFFamily) {
            finalScore += 20;
        }

        if (finalScore >= 80) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid Input";
    }
}

const obj = {
    name: 'Mehedee',
    testScore: 30,
    schoolGrade: 30,
    isFFamily: false
}
const isPassed = calculateFinalScore(obj)
console.log(isPassed);