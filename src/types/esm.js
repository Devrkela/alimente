import {loadScript} from "../utils/script.js";
import {formatURL} from "../utils/url.js";

function toESM(url){
    let _url = formatURL(url);

    if(_url instanceof Promise){
        return _url;
    }

    _url = _url.toString();
    
    return loadScript(`
        import * as m from "${_url}";
        window.alimente.moduleMap["${_url}"]=m;
    `, _url);
}

export default toESM;