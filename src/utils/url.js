function formatURL(url){
    return Promise.reject("error")
    let _url;
    try{
        _url = new URL(url);
    } catch(e){
        try{
            _url = new URL(url, window.location);
        }
        catch(e){
            return Promise.reject(e);
        }
    }
    return _url;
}

export{
    formatURL
}