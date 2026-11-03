function validateID(idString) {
    // Checks length
    if(idString.length !== 13) return false;

    // Checks if all chars are digits
    if(!/\d{13}/g.test(idString)) return false;

    // Checks citizenship
    const nationality = parseInt(idString.substring(10, 11));
    if(!/[0-2]/.test(nationality)) return false;

    // This index can only be 8 or 9
    const index = parseInt(idString.substring(11, 12));
    if(!/[89]/.test(index)) return false;

    let YEAR = parseInt(idString.substring(0, 2));
    let MONTH = parseInt(idString.substring(2, 4));
    let DAY = parseInt(idString.substring(4, 6));

    // This adjusts the YEAR variable
    YEAR += parseInt(new Date().getFullYear()) % 100 <= YEAR ? 1900 : 2000;

    return isValidDate(YEAR, MONTH, DAY) && checksum(idString);
}

function isValidDate(year, month, day) {
    let date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === (month - 1) &&
        date.getDate() === day
    );
}

function checksum(idString) {
    let sum = 0;
    for(let i = 0; i < idString.length; i++) {
        let amount = parseInt(idString[i]);
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