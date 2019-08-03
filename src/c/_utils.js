const getTreeMap = (treeData) => {

    var map = {};

    processNodes(null, treeData, map);

    return map;
}

const processNodes = (parentKey, nodes, map) => {
    

    nodes.forEach(node => {
        const title = node.title;
        const keyElements = [];
        if (parentKey) keyElements.push(parentKey);
        if (title) keyElements.push(title);
        const key = keyElements.join(',');
        map [key] = node;

        //process child nodes
        const childNodes = node.children;
        if (childNodes && childNodes.length){
            processNodes(key, childNodes, map);
        }
        

    });


}



const arrayContainsArray1 = (array, array1) => {
    let notIncluded = false;

    // console.log('array -> '+JSON.stringify(array));
    // console.log('array1 -> '+JSON.stringify(array1));
    
    array1.find((element)=>{
        // console.log('array -> '+JSON.stringify(array));
        // console.log('element -> '+element);
        if(array.indexOf(element) === -1){
            notIncluded = true;
            return notIncluded;
        }
    });
    return !notIncluded;
}

export default {
    getTreeMap,
    arrayContainsArray1
}