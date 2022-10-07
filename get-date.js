/**
 * Get today or date relative to today in format mm/dd/yyyy
 * @returns {string}
 */
function getDate(day = 0){
    const date = new Date(Date.now());

    // shift days
    date.setDate(date.getDate() + day);

    return new Date(date).toLocaleString().split(',')[0];
}