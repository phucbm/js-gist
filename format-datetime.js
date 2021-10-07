/**
 * Format datetime
 * https://stackoverflow.com/a/34015511/10636614
 * @param string
 * @returns {string}
 */
function formatDate(string){
    const datetime = new Date(string);
    const day = datetime.toLocaleString("vi-VN", {day: 'numeric'});
    const month = datetime.toLocaleString("vi-VN", {month: 'numeric'});
    const year = datetime.toLocaleString("vi-VN", {year: 'numeric'});
    const hour = datetime.toLocaleTimeString("vi-VN", {hour: '2-digit'});
    const minute = datetime.toLocaleTimeString("vi-VN", {minute: '2-digit'});

    return `${day}/${month}/${year} - ${hour}:${minute}`;
}