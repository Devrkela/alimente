function finalize(){
    return this;
}

function promisify(url, resolve, reject){
    const img = document.createElement("img");

    img.src = url;

    function error(err){
        reject(err);
    }

    function load(){
        resolve(img.decode().then(finalize.bind(img)));
    }

    img.addEventListener("error", error);
    img.addEventListener("load", load);
}

function toImage(url){
    return new Promise(promisify.bind(null, url));
}

export default toImage;