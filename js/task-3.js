function getElementWidth(content, padding, border) {
    const width = parseFloat(content);
    const horizontalPadding = parseFloat(padding);
    const thicknessBorder = parseFloat(border);
    const elementWidth = width + 2 * horizontalPadding + 2 * thicknessBorder;
    return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200