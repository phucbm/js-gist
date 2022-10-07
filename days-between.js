/**
 * Get number of days between two dates in format mm/dd/yyyy
 * @param startDate
 * @param endDate
 * @returns {number}
 */
function daysBetween(startDate, endDate){
    const treatAsUTC = date => {
        const result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
    }

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}