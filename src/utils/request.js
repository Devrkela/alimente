function toBlob(reponse){
    return response.blob();
}

function toJSON(response){
    return response.json();
}

function toText(response){
    return response.text();
};

function getBlob(url){
    return fetch(url).then(toBlob);
}

function getJSON(url){
    return fetch(url).then(toJSON);
}

function getText(url){
    return fetch(url).then(toText);
}

export {
    getBlob,
    getJSON,
    getText
};