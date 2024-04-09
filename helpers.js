function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
    for (let i = 0; i < numsAsStrings.length; i++) {
        let valueToNumber = Number(numsAsStrings[i]);
        if (Number.isNaN(valueToNumber)) {
            return new Error(`The value ${numsAsStrings[i]} at index ${i} is not a number.`);
        };
        result.push(valueToNumber);
    }
    return result;
}

function findMean(numsArray) {
    if (numsArray.length === 0) return 0;
    let result = numsArray.reduce(function (acc, curr) {
        return acc + curr;
    })
    return result / numsArray.length;
}

function findMedian(numsArray) {
    numsArray.sort((a, b) => a - b);
    let middleIndex = Math.floor(numsArray.length / 2);
    let median;
    if (numsArray.length % 2 === 0) {
        median = (numsArray[middleIndex] + numsArray[middleIndex - 1]) / 2;
    } else {
        median = numsArray[middleIndex];
    }
    return median;
}

function createFrequencyCounter(numsArray) {
    return numsArray.reduce(function (acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function findMode(numsArray) {
    let freqCounter = createFrequencyCounter(numsArray);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }

    return +mostFrequent;
}

module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
};