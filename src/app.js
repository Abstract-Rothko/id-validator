// Write a function validateID(idString) that takes a string of characters
// and determines if it is a valid South African ID number. A valid ID must meet the following criteria:
// It must be exactly 13 characters long.
// It must contain only numbers.
// The first 6 digits represent a valid date in YYMMDD format (e.g., month cannot be greater than 12,
// day cannot be greater than 31).
// The function should return true if it meets all criteria, and false if it fails any of them.

// TODO
// Deal with future dates in idString
// Implement the Luhn Algorithm

function validateID(idString) {
    // Checks length
    if(idString.length !== 13) return false;

    // Checks if all chars are digits
    if(!/\d{13}/g.test(idString)) return false;

    // checks citizenship
    const nationality = parseInt(idString.slice(10, 11));

    if(!/[0-2]/.test(nationality)) return false;

    // Reminder:  find out official name
    const index11 = parseInt(idString.slice(11, 12));

    if(!/[89]/.test(index11)) return false;

    // variables and dates and stuff
    const date = new Date();
    const year = parseInt(date.getFullYear()) % 1000;

    let testYear = parseInt(idString.slice(0, 2));
    let testMonth = parseInt(idString.slice(2, 4));
    let testDay = parseInt(idString.slice(4, 6));

    if(testYear > year) {
        testYear += 1900;
    } else if(testYear <= year) {
        testYear += 2000;
    }

    const isValid = isValidDate(testDay, testMonth, testYear);
    const luhn = checksum(idString);

    return isValid && luhn;
}

function isValidDate(day, month, year) {
    const isLeapYear = (year) => { 
        if(year % 4 === 0 && (year % 100 === 0 && year % 400 === 0)) {
            return true;
        } else if(year % 4 === 0 && year % 100 !== 0) {
            return true;
        } else {
            return false;
        }
    };

    const thirtyOneDays = new Set([1, 3, 5, 7, 8, 10, 12]);
    const thirtyDays = new Set([4, 6, 9, 11]);
    const feb = isLeapYear(year) ? 29 : 28;

    if(thirtyOneDays.has(month)) {
        if(day >= 1 && day <= 31) {
            return true;
        }
    } else if(thirtyDays.has(month)) {
        if(day >= 1 && day <= 30) {
            return true;
        }
    } else if(month === 2) {
        if(day >= 1 && day <= feb) {
            return true;
        }
    }

    return false;
}

function checksum(idString) {
    let sum = 0;

    for(let i = 0; i < idString.length; i++) {
        let amount = +idString[i];

        if(i % 2 !== 0) {
            amount  *= 2;
            if(amount >= 10) {
                amount -= 9;
            }
        }

        sum += amount;
    }

    return sum % 10 === 0;
}

export default validateID;