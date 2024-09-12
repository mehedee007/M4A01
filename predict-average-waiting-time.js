function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof serialNumber === 'number' && serialNumber > waitingTimes.length) {
        let totalTime = 0;
        for(const time of waitingTimes){
            totalTime += time;
        }
        const avgWaitingTime = Math.round(totalTime/ waitingTimes.length);
        const remainingPersons = (serialNumber - 1 ) - waitingTimes.length;
        const toWaitTime = avgWaitingTime * remainingPersons;
        return toWaitTime;
    } else {
        return "Invalid Input";
    }
}
let arr = [13, 2, 6, 7, 10]
const wt = waitingTime(arr, 50);
console.log(wt);