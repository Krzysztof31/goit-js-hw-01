function getPixelValue(pixels) {
    return parseInt(pixels.replace("px", ""),10)
    
}
    
function getElementWidth(content, padding, border) {
    return getPixelValue(content) + 2 * getPixelValue(padding) + 2 * getPixelValue(border);
   
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
