/**
 * Example 3: Setting fill color
 */

const COLOR_BLACK: SolidPaint = { type: "SOLID", color: { r: 0, g: 0, b: 0 } }
const rectangle = figma.createRectangle()
rectangle.fills = [COLOR_BLACK]
figma.closePlugin()
