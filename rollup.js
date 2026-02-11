import {rollup} from "rollup";
import terser from '@rollup/plugin-terser';

// see below for details on these options
const inputOptions = {};

inputOptions.iife = {
    input: "./iife.js"
};

buildAll();

async function buildAll(){
    const builds = [];
    
    for(let type in inputOptions){
        builds.push(build(inputOptions[type],type));
    }

    return Promise.all(builds);
};

async function build(inputOption, type) {
    rollup(inputOption).then(createBundle.bind(null, type));
}

function closeBundle(bundle){
    bundle.close();
}

function error(error){
    console.error(`An error has occured with ${error.code} code.`);
}
function createBundle(type, bundle) {
    return Promise.all([
        bundle.write({file:`./dist/alimente-${type}.js`}),
        bundle.write({file:`./dist/alimente-${type}-min.js`, plugins:[terser()]})
    ]).then(closeBundle.bind(null, bundle));
};