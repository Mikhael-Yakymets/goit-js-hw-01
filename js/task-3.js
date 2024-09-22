function getElementWidth(content, padding, border) {
  // Convert parameters from strings in Npx format to numbers
  const contentWidth = parseFloat(content)
  const paddingWidth = parseFloat(padding) * 2 // padding is on both sides
  const borderWidth = parseFloat(border) * 2 // border is on both sides

  // Calculate the total width of the element
  const totalWidth = contentWidth + paddingWidth + borderWidth

  // Return the total width
  return totalWidth
}

// Test cases to check if the function works correctly
console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('60px', '12px', '8.5px')) // 101
console.log(getElementWidth('200px', '0px', '0px')) // 200
