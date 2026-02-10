function cleanup(script){
    URL.revokeObjectURL(script.src);
    script.remove();
};

function promisify(text, url, resolve, reject){
    const blob = new Blob([text], {type:"application/javascript"});
    
    const script = document.createElement("script");
    
    function error(err){
        reject(err);
        cleanup(script);
    };

    function load(){
        resolve(alimente.moduleMap[url]);
        cleanup(script);
    }

    Object.assign(script, {type:"module", src: URL.createObjectURL(blob)});

    script.addEventListener("load", load);
    script.addEventListener("error", error);
    
    document.body.appendChild(script);
}

function loadScript(text, url){
    return new Promise(promisify.bind(null, text, url));   
}

export {
    loadScript,
    cleanup,
}