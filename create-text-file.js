/**
 * Create text file
 * https://stackoverflow.com/questions/31048215/how-to-create-txt-file-using-javascript-html5
 * @param text
 * @param fileName
 * @returns {string}
 */
const createTextFile = (text, fileName = null) => {
    const blobURL = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if(fileName !== null){
        window.URL.revokeObjectURL(fileName);
    }

    // use this object URL as href
    return window.URL.createObjectURL(blobURL);
}