import {getText} from "../utils/request.js";

function createTemplate(text){
     const div = document.createElement("div");

    div.innerHTML = `<template>${text}</template>`;

    return div.firstChild.content;
};

function toTemplate(url){
    return getText(url).then(createTemplate);
};

export default toTemplate;