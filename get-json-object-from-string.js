/**
 * Get JSON object from string
 * @param string
 * @returns {{}|*|{}}
 */
import {isJsonString} from "./is-json-string";

export function getJSONObjectFromString(string){
    let options = {};
    if(!isJsonString(string)) return options;

    options = JSON.parse(string);

    // convert boolean string to real boolean
    for(const [key, value] of Object.entries(options)){
        if(value === "false") options[key] = false;
        if(value === "true") options[key] = true;
    }

    return options;
}