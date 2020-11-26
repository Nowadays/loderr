const _ = require('lodash');

const getRandomIntInclusive = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const wrapper = function(originalFn){
    return function(...args){
        const rand =  getRandomIntInclusive(0, 10);
        if(rand > 5) throw new Error('oupsy, bad luck retry later');
        return originalFn(...args);
    }
}

for (const fn in _) {
    if(_.hasOwnProperty(fn)){
        _[fn] = wrapper(_[fn]);
    }
}

module.exports = _;
