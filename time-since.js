/**
 * Time Since
 * https://stackoverflow.com/a/47006398/10636614
 * @param date
 * @returns {string}
 */
function timeSince(date){
    date = new Date(date);
    const intervals = [
        {label: 'year', seconds: 31536000},
        {label: 'month', seconds: 2592000},
        {label: 'day', seconds: 86400},
        {label: 'hour', seconds: 3600},
        {label: 'min', seconds: 60},
        {label: 'second', seconds: 1}
    ];

    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const interval = intervals.find(i => i.seconds < seconds);
    const count = Math.floor(seconds / interval.seconds);
    return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
}