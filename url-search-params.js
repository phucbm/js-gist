/**
 * Get parameter from URL
 * https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 * @param param
 * @param url
 * @returns {*}
 */
function getUrlParam(param, url = window.location.href){
    return new URL(url).searchParams.get(param);
}