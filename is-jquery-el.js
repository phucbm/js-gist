/**
 * Is jQuery element
 * @param element : HTMLElement
 * @returns {boolean}
 */
export function isjQueryElement(element){
    return typeof jQuery !== 'undefined' && element instanceof jQuery;
}