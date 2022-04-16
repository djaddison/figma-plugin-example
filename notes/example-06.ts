/**
 * Example 6: Create six rectangles
 */

const NUMBER_OF_RECTANGLES = 6
const SPACE_BETWEEN = 10

for (let i = 0; i < NUMBER_OF_RECTANGLES; i++) {
  const rectangle = figma.createRectangle()
  rectangle.name = `rectangle-${i}`
  rectangle.x = i * (rectangle.width + SPACE_BETWEEN)
}
figma.closePlugin()
