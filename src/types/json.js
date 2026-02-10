import {getJSON} from "../utils/request.js";

function toJSON(url){
    return getJSON(url);
}

export default toJSON;