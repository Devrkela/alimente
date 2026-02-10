function promisify(url, resolve, reject){
    const video = document.createElement("video");

    video.src = url;

    function error(err){
        reject(err);
    }

    function loadeddata(){
        resolve(video);
    }

    video.addEventListener("error", error);
    video.addEventListener("loadeddata", loadeddata);
}

function toVideo(url){
    return new Promise(promisify.bind(null, url));
}

export default toVideo;