import {getText} from "../utils/request.js";

function renderSVG(text){
    const wrapper = document.createElement("div");

    wrapper.innerHTML = text;

    return wrapper.firstChild;
}

function toSVG(url){
    return getText(url).then(renderSVG);
};

export default toSVG;