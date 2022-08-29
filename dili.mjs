// -*- coding: utf-8, tab-width: 2 -*-

const hasOwnProp = Object.prototype.hasOwnProperty;


const EX = function makeDictList(x) {
  const dl = [].concat(x).filter(Boolean);
  Object.assign(dl, EX.neatListApi, EX.dictListApi);
  return dl;
};


EX.neatListApi = {

  empty0() { return (this.length && this); },
  toDictList() { return EX(this); },

};


EX.dictListApi = {

  getEachOwnProp(key) {
    const dl = this;
    const found = Object.assign([], EX.neatListApi);
    dl.forEach(function check(dict) {
      if (hasOwnProp.call(dict, key)) { found.push(dict[key]); }
    });
    return found;
  },

};


export default EX;
