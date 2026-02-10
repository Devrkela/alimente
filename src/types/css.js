import {getText} from "../utils/request.js";
import {cleanup} from "../utils/script.js";

function promisify(url, resolve, reject){
    const link = document.createElement("link");
    const attributes = {href:url, rel:"stylesheet"};

    function error(err){
        reject(err);
        cleanup(link);
    };

    function load(){
        resolve(link.sheet);
        cleanup(link);
    }

    
    Object.assign(link, attributes);

    link.addEventListener("load", load);
    link.addEventListener("error", error);

    document.head.appendChild(link);
}

function toCSS(url){
    return new Promise(promisify.bind(null, url));
}

export default toCSS;