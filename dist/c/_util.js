"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getTreeMap = function getTreeMap(treeData) {
  var map = {};
  processNodes(null, treeData, map);
  return map;
};

var processNodes = function processNodes(parentKey, nodes, map) {
  nodes.forEach(function (node) {
    var title = node.title;
    var keyElements = [];
    if (parentKey) keyElements.push(parentKey);
    if (title) keyElements.push(title);
    var key = keyElements.join(',');
    map[key] = node; //process child nodes

    var childNodes = node.children;

    if (childNodes && childNodes.length) {
      processNodes(key, childNodes, map);
    }
  });
};

var arrayContainsArray1 = function arrayContainsArray1(array, array1) {
  var notIncluded = false; // console.log('array -> '+JSON.stringify(array));
  // console.log('array1 -> '+JSON.stringify(array1));

  array1.find(function (element) {
    // console.log('array -> '+JSON.stringify(array));
    // console.log('element -> '+element);
    if (array.indexOf(element) === -1) {
      notIncluded = true;
      return notIncluded;
    }
  });
  return !notIncluded;
};

var _default = {
  getTreeMap: getTreeMap,
  arrayContainsArray1: arrayContainsArray1
};
exports["default"] = _default;
