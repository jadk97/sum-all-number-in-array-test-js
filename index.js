function sumItems(array) {
    result = 0;
    array.forEach(function(element){
        if(Array.isArray(element)){
          result = result + sumItems(element);
        }
        else{
          result = result + element;
        }
    });
    return result;
}

module.exports = sumItems;