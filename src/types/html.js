import {getText} from "../utils/request.js";

const parser = new DOMParser();

function createDocument(text){
    return parser.parseFromString(text, "text/html");  
};

function toHTML(url){
    return getText(url).then(createDocument);
}

export default toHTML;