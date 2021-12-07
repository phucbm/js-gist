/**
 * Copy text to clipboard from input field
 * @param $target
 */
function copyTextToClipboard($target){
    $target.select();
    document.execCommand("copy");
    $target.blur();
}


// (better compatibility)
/**
 * Copy text to clipboard from given value
 * @param val
 */
const copyValueToClipboard = (val) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);

    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = val;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}