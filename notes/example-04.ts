/**
 * Example 4: Setting position and size
 */

const rectangle = figma.createRectangle()
rectangle.x = 5
rectangle.y = 10
rectangle.resize(50, 200) // width, height
figma.closePlugin()
