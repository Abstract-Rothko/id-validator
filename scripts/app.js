export default function validateID(idString, today = new Date()) {
    // Checks length
    if(idString.length !== 13) return false;

    // Checks if all chars are digits
    if(!/^\d{13}$/.test(idString)) return false;

    // Checks citizenship
    const nationality = parseInt(idString.substring(10, 11), 10);
    if(nationality > 2) return false;

    // This index can only be 8 or 9
    const index = parseInt(idString.substring(11, 12), 10);
    if(!/[89]/.test(index)) return false;

    let year = parseInt(idString.substring(0, 2), 10);
    let month = parseInt(idString.substring(2, 4), 10);
    let day = parseInt(idString.substring(4, 6), 10);

    // This adjusts the YEAR variable
    year += today.getFullYear() % 100 <= year ? 1900 : 2000;

    return isValidDate(year, month, day) && checksum(idString);
}

export function isValidDate(year, month, day) {
    let date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === (month - 1) &&
        date.getDate() === day
    );
}

export function checksum(idString) {
    let sum = 0;
    for(let i = 0; i < idString.length; i++) {
        let amount = parseInt(idString[i], 10);
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