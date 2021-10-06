/**
 * String to slug
 * https://stackoverflow.com/a/1054862/10636614
 * @param Text
 * @returns {string}
 */
function stringToSlug(Text){
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}