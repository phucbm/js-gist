/**
 * Copy text to clipboard
 * @param $target
 */
function copyTextToClipboard($target){
    $target.select();
    document.execCommand("copy");
    $target.blur();
}