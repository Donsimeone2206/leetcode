/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let runningSum = 0;
    const stack = [];
    for(const o of operations) {
        if(o === 'C') {
            runningSum -= stack.pop();
            continue;
        }
        if(o === 'D') {
            const val = stack[stack.length - 1] * 2;
            stack.push(val);
            runningSum += val;
            continue;
        }
        if(o === '+') {
            const val = stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(val);
            runningSum += val;
            continue;
        }
        stack.push(+o);
        runningSum += +o;
    }
    return runningSum;
};

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    // Stack to keep track of valid scores
    let record = [];

    // Iterate through each operation
    for (let op of operations) {
        if (!isNaN(op)) { // If it's a number (including negatives)
            record.push(parseInt(op, 10));
        } else if (op === "C" && record.length > 0) { // Remove last valid score
            record.pop();
        } else if (op === "D" && record.length > 0) { // Double last valid score
            record.push(2 * record[record.length - 1]);
        } else if (op === "+" && record.length >= 2) { // Sum last two valid scores
            record.push(record[record.length - 1] + record[record.length - 2]);
        }
    }

    // Return the sum of all valid scores
    return record.reduce((sum, num) => sum + num, 0);
};
