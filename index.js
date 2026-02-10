import types from "./src/types/index.js";

function alimente(url, type){
  if(!type){
    return types.toESM(url);    
  }

  if(!types[type]) return console.warn("Type is not supported!");

  return types[type](url);
};

alimente.moduleMap = {};

export default alimente;